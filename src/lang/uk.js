const data = {...require("./base")}
const {pug} = require("./utils/functions")
const constants = require("../lib/constants")
if (!constants.language_dev) Object.assign(data, require("./en.js"))

;(() => {
	data.meta_direction = "ltr"
	data.meta_use_boring_font = true

	data.go_to_profile = "Перейти до профілю"
	data.go_to_post = "Перейти до допису"
	data.go_username_or_url = "Псевдонім чи URL"
	data.go_shortcode_or_url = "Ідентифікатор чи URL"
	data.go_button = "Перейти"
	data.about_bibliogram_header = "Про Bibliogram"
	data.pug_about_bibliogram_content = pug(`
		p.
			Bibliogram — це вебсайт, який показує дані загальнодоступних профілів Instagram на
			більш дружній сторінці, котра завантажується швидше, дає змогу зберегти зображення, вилучає
			рекламу, генерує RSS-стрічки й не вимагає зареєструватися. #[a(href=(link_to_featured_profiles ? "#featured-profiles" : "/u/instagram")).example-link Перегляньте зразок.]
		p.
			Bibliogram #[em не] дає змоги анонімно дописувати, оцінювати, коментувати чи відстежувати;
			не показує приватних профілів і не зберігає видалених дописів.
	`)
	data.experiencing_problems_header = "Виникли труднощі з Bibliogram?"
	data.t_read_more_here = "Прочитайте допис."
	data.about_this_instance_header = "Про цей сервер"
	data.onion_site_available = "Доступний onion-сайт"
	data.t_settings = "Параметри"
	data.t_privacy_policy = "Політика приватності"
	data.has_not_written_privacy_policy = "Ще нема політики приватності"
	data.instance_not_blocked = "Сервер не заблоковано"
	data.instance_partially_blocked = "Сервер частково заблоковано"
	data.instance_blocked = "Сервер заблоковано"
	data.rss_disabled = "RSS-стрічки вимкнено"
	data.rss_enabled = "RSS-стрічки ввімкнено"
	data.external_links_header = "Зовнішні посилання"
	data.source_link = "Вільний код на sourcehut"
	data.matrix_link = "Matrix-кімната обговорень"
	data.instances_link = "Інші сервери Bibliogram"
	data.contact_link = "Написати розробниці"
	data.featured_profiles_header = "Цікаві профілі"
	data.featured_profiles_whats_this = "Що це?"
	data.html_featured_profiles_disclaimer = pug(`
		p Команда супроводу цього вебсайту особисто вважає ці профілі вартими уваги.
		p Ці заохочення не стосуються проєкту Bibliogram.
	`)()
	data.verified_badge_title = "Звірено"
	data.verified_badge_alt = "Звірено."
	data.fn_post_counter_label = n =>
		n % 10 === 1 && n % 100 !== 11 ? "допис"
		: n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? "дописи"
		: "дописів"
	data.outgoing_follows_counter_label = "Відстежує:"
	data.incoming_follows_counter_label = "Підписок:"
	data.quota_left = "Залишок квоти:"
	data.t_home = "Домівка"
	data.tab_timeline = "Стрічка"
	data.tab_igtv = "IGTV"
	data.next_page_button = "Наступна сторінка"
	data.next_page_button_loading = "Завантаження..."
	data.profile_is_private_notice = "Профіль приватний."
	data.no_posts_notice = "Дописів нема."
	data.no_more_posts_notice = "Всі дописи переглянуто."
	data.fn_page_divider = number => `Сторінка ${number}`
	data.pug_post_timestamp = pug(`
		| Розміщено #[time(datetime=post.date.toISOString() data-local-date)= post.getDisplayDate()].
	`)
	// settings
	data.t_features = "Функціонал"
	data.t_language = "Мова"
	data.save_data = "Зберігати дані"
	data.t_automatic = "Автоматично"
	data.t_off = "Вимкнено"
	data.lazy_load = "Ліниво"
	data.t_full = "Повністю"
	data.rewrite_youtube = "Домен YouTube"
	data.rewrite_twitter = "Домен Twitter"
	data.remove_trailing_hashtags = "Кінцеві риски"
	data.t_hide = "Ховати"
	data.link_hashtags = "Хештеги"
	data.t_clickable = "Посилання"
	data.show_comments = "Коментарі"
	data.t_display = "Показувати"
	data.fast_navigation = "Навігація"
	data.t_enabled = "Прискорена"
	data.infinite_scroll = "Безмежне прокручування"
	data.t_normal = "Усталено"
	data.t_eager = "Охоче"
	data.t_manual = "Вручну"
	data.t_appearance = "Оформлення"
	data.t_theme = "Тема"
	data.display_top_nav = "Верхня панель"
	data.t_always = "Завжди"
	data.timeline_columns = "Колонки стрічки"
	data.t_dynamic = "Динамічно"
	data.three_columns = "3 колонки"
	data.four_columns = "4 колонки"
	data.six_columns = "6 колонок"
	data.caption_side = "Текст"
	data.left_caption = "Ліворуч (Bibliogram)"
	data.right_caption = "Праворуч (Instagram)"
	data.display_alt_text = "Альтернативний текст"
	data.t_return = "Назад"
	data.t_save = "Зберегти"
	data.save_and_return = "Зберегти й назад"
	data.pug_restore_sync_settings = pug(`
		| Щоб згодом відновити чи синхронізувати параметри, #[a(href="/applysettings/"+token)#restore-link зробіть закладкою це посилання.]
	`)
	data.settings_saved = "Збережено."

})()

module.exports = data
