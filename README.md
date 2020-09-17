Bu proje `create-react-app` ile başlatıldı.

## Folder Structure

```
app/
	README.md
	node_modules/
	package.json
	public/
		index.html
		favicon.ico
	src/
		assets/
			img/
			style/
			svg/
		components/
			Button/
				Button.js
				button.scss
			Cards/
				Card.js
				CardList.js
				cards.scss
			Content/
				Content.js
				content.scss
			Footer/
				Footer.js
				footer.scss
			Header/
				Header.js
				header.scss
			ListPage/
				ListPage.js
			Main/
				Main.js
			PageHeader/
				PageHeader.js
				page-header.scss
		helper/
			withLoadingAndError.js
		App.js
		index.js
		serviceWorker.js
```

### Çalıştırılabilir Script'ler

`npm start`

Uygulamayı development modunda http://locahost:3000 adresinde ayağa kaldırır.

`npm run build`

Uygulamayı production için hazır hale getirip ilgili dosyaları build klasörüne atar.

### Kullanılan Dil Özellikleri

- En son JavaScript standartlarını destekler.
- node-sass ile SCSS dosyalarını destekler.
- Routing için `react-router` ve `react-router-dom` destekler.

### Detay

- Uygulamanın aşırı karmaşık yapısının olmaması ve sayda sayısının az olmasından dolayı `create-react-app` ile uygulama başlatım daha az zaman harcayarak kodlama bölümüne daha kısa bir zamanda geçtim.
- CSS Framework kullanmadım çünkü daha hızlı projeyi bitirmemi sağlayabilirdi ama projenin boyutundan bir artış olurdu o maliyeti gereksiz buldum.
- Responsive tarafında daha detaylı geliştirmeler ve tam uyumluluk yapılabilirdi.
- Vaktim olsaydı 'Series' ve 'Movies' sayfalarında ilk 21 kayıt gösteriminin altında daha fazla göster butonu yerleştirip zaten rest servisten aldığımın elinde hazır olan data üzerinden gösterilmeyen kayıtları da gösterecek bir kod yazabilirdim.
