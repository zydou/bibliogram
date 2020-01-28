import {ElemJS, q} from "./elemjs/elemjs.js"

class FreezeWidth extends ElemJS {
	freeze(text) {
		this.element.style.width = window.getComputedStyle(this.element).width
		this.oldText = this.element.textContent
		this.text(text)
	}

	unfreeze() {
		this.element.style.width = ""
		this.text(this.oldText)
	}
}

const intersectionThreshold = 0

class NextPage extends FreezeWidth {
	constructor(container) {
		super(container)
		this.clicked = false
		this.nextPageNumber = +this.element.getAttribute("data-page")
		this.attribute("href", "javascript:void(0)")
		this.event("click", event => this.onClick(event))

		this.observer = new IntersectionObserver(entries => this.onIntersect(entries), {rootMargin: "0px", threshold: intersectionThreshold})
		this.observer.observe(this.element)
	}

	onClick(event) {
		if (event) event.preventDefault()
		if (this.fetching) return
		this.class("clicked")
		this.fetch()
	}

	/**
	 * @param {IntersectionObserverEntry[]} entries
	 */
	onIntersect(entries) {
		if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= intersectionThreshold)) {
			if (this.fetching) return
			this.class("disabled")
			this.fetch()
		}
	}

	fetch() {
		if (this.fetching) return
		this.fetching = true
		this.freeze("Loading...")

		fetch(`/fragment/user/${this.element.getAttribute("data-username")}/${this.nextPageNumber}`).then(res => res.text()).then(text => {
			q("#next-page-container").remove()
			this.observer.disconnect()
			q("#timeline").insertAdjacentHTML("beforeend", text)
			addNextPageControl()
		})
	}
}

function addNextPageControl() {
	const nextPage = q("#next-page")
	if (nextPage) new NextPage(nextPage)
}

addNextPageControl()
