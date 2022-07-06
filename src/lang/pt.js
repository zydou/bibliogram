const data = {...require("./base")}
const {pug} = require("./utils/functions")
const constants = require("../lib/constants")
if (!constants.language_dev) Object.assign(data, require("./en.js"))

;(() => {
	data.meta_direction = "ltr"

	data.go_to_profile = "Ir para perfil"
	data.go_to_post = "Ir para publicação"
	data.go_username_or_url = "Nome de utilizador ou URL"
	data.go_shortcode_or_url = "Código ou URL"
	data.go_button = "Ir"
	data.about_bibliogram_header = "Acerca do Bibliogram"
	data.pug_about_bibliogram_content = pug(`
		p.
      O Bibliogram é um site que obtém informação de perfis públicos de Instagram e a organiza
      numa página mais amigável, que carrega mais rapidamente, permite o descarregamento de imagens,
      elimina anúncios, gera feeds RRS e não te incita a que te registes.
      #[a(href=(link_to_featured_profiles ? "#featured-profiles" : "/u/instagram")).example-link See an example.]
    p.
      O Bibliogram #[em não] permite publicar, gostar, comentar, seguir anonimamente, nem ver perfis
      privados.
      Também não preserva publicações eliminadas.
	`)
	data.experiencing_problems_header = "Estás a ter problemas com o Bibliogram?"
	data.t_read_more_here = "Lê mais aqui."
	data.about_this_instance_header = "Acerca desta instância"
	data.onion_site_available = "Site \"Onion\" (TOR) disponível"
	data.t_settings = "Configurações"
	data.t_privacy_policy = "Política de privacidade"
	data.has_not_written_privacy_policy = "O dono não redigiu uma política de privacidade"
	data.instance_not_blocked = "A instância não está bloqueada"
	data.instance_partially_blocked = "A instância está parcialmente bloqueada"
	data.instance_blocked = "A instância está bloqueada"
	data.rss_disabled = "Feeds RSS estão inativos"
	data.rss_enabled = "Feeds RSS estão ativos"
	data.external_links_header = "Ligações externas"
	data.source_link = "Código no sourcehut"
	data.matrix_link = "Sala de discussão na Matrix"
	data.instances_link = "Outras instâncias de Bibliogram"
	data.contact_link = "Contactar o programador"
	data.featured_profiles_header = "Perfis destacados"
	data.featured_profiles_whats_this = "O que é isto?"
	data.html_featured_profiles_disclaimer = pug(`
		p O dono deste website considera estes perfis interessantes.
		p Não devem ser tomados como aval do projeto Bibliogram.
	`)()
	data.verified_badge_title = "Verificada"
	data.verified_badge_alt = "Verificada."
	data.post_counter_label = "publicações"
	data.outgoing_follows_counter_label = "A seguir"
	data.incoming_follows_counter_label = "Seguida por"
	data.quota_left = "Quota restante:"
	data.t_home = "Página inicial"
	data.tab_timeline = "Linha temporal"
	data.tab_igtv = "IGTV"
	data.next_page_button = "Próxima página"
	data.next_page_button_loading = "A carregar..."
	data.profile_is_private_notice = "O perfil é privado"
	data.no_posts_notice = "Sem publicações."
	data.no_more_posts_notice = "Sem mais publicações"
	data.fn_page_divider = number => `Página ${number}`
	data.pug_post_timestamp = pug(`
		| Publicado a #[time(datetime=post.date.toISOString() data-local-date)= post.getDisplayDate()].
	`)
	// settings
	data.t_features = "Funcionalidades"
	data.t_language = "Idioma"
	data.save_data = "Guardar dados"
	data.t_automatic = "Automático"
	data.t_off = "Desligado"
	data.lazy_load = "Carregamento parcial"
	data.t_full = "Completo"
	data.rewrite_youtube = "Reescrever domínio do YouTube"
	data.rewrite_twitter = "Reescrever domínio do Twitter"
	data.remove_trailing_hashtags = "Esconder hashtags terminais"
	data.t_hide = "Esconder"
	data.link_hashtags = "Hashtags clicáveis"
	data.t_clickable = "Clicável"
	data.show_comments = "Mostrar comentários"
	data.t_display = "Mostrar"
	data.fast_navigation = "Navegação rápida"
	data.t_enabled = "Ativada"
	data.infinite_scroll = "Scroll infinito"
	data.t_normal = "Normal"
	// data.t_eager = "Eager"
	data.t_manual = "Manual"
	data.t_appearance = "Aparência"
	data.t_theme = "Tema"
	data.display_top_nav = "Mostrar barra de topo"
	data.t_always = "Sempre"
	data.timeline_columns = "Colunas da linha temporal"
	data.t_dynamic = "Dinâmico"
	data.three_columns = "3 colunas"
	data.four_columns = "4 colunas"
	data.six_columns = "6 colunas"
	data.caption_side = "Lado da legenda"
	data.left_caption = "Esquerda (Bibliogram)"
	data.right_caption = "Direita (Instagram)"
	data.display_alt_text = "Mostrar texto alternativo em linha"
	data.t_return = "Voltar"
	data.t_save = "Guardar"
	data.save_and_return = "Guardar e voltar"
	data.pug_restore_sync_settings = pug(`
		| Podes restaurar e sincronizar configurações guardadas #[a(href="/applysettings/"+token)#restore-link adicionando esta ligação aos teus marcadores].
	`)
	data.settings_saved = "Guardadas."

})()

module.exports = data
