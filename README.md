La Formatrice Cinica — Sito web
Sito statico multi-pagina per Gabriella Femia · La Formatrice Cinica.
Pronto per essere caricato su GitHub Pages, Netlify, Vercel o qualsiasi hosting statico.
Struttura
```
/
├── index.html              Home
├── chi-sono.html           Chi sono
├── programmi.html          Programmi (Coaching, Leadership, Non ho tempo)
├── contatti.html           Contatti
├── prenota.html            Prenota consulenza gratuita (con questionario pre-call)
├── privacy.html            Privacy Policy (GDPR)
├── cookie-policy.html      Cookie Policy
├── css/style.css           Foglio di stile condiviso
├── js/site.js              Logica condivisa (cookie banner, navigazione, animazioni)
└── assets/
    ├── favicon.png         Logo rosa (favicon)
    ├── logo-circle.png     Logo "regina" su nero, in cerchio
    ├── logo-variants.png   Varianti logo
    └── gabriella-bn.jpg    Ritratto in bianco e nero
```
Caratteristiche
Palette: bianco/nero elegante, accento oro tenue.
Tipografia: Playfair Display (display) + Inter (testo) + JetBrains Mono (numeri/etichette).
Cookie banner GDPR-compliant: appare alla prima visita, scelta salvata in `localStorage` (`lfc_cookies_v1`).
Privacy & Cookie Policy complete e linkate da footer + banner.
Favicon: il logo rosa indicato nel brief (`assets/favicon.png`).
SEO: title, meta description, keywords, canonical, OpenGraph e JSON-LD Person su ogni pagina.
Responsive: layout fluido, mobile menu burger, tipografia scalata.
Form: contatti (su `contatti.html`) e questionario pre-call (su `prenota.html`) — frontend-only; collegare un endpoint quando si va in produzione (Formspree, Netlify Forms, FormKeep o simili).
Deploy su GitHub Pages
Crea un repository (es. `laformatricecinica.github.io` o un repo a piacere).
Carica tutti i file di questa cartella nella radice del repo.
Vai in Settings → Pages e seleziona il branch (di solito `main`) come sorgente.
Attendi qualche minuto: il sito sarà online su `https://<utente>.github.io/<repo>/`.
Cose da personalizzare prima del go-live
`info@laformatricecinica.it` → email reale di Gabriella.
`P.IVA 00000000000` nel footer.
Link Instagram (già impostato).
I form di contatto e prenotazione → collegare un servizio (Formspree, EmailJS, Netlify Forms).
Sostituire le testimonianze placeholder in `index.html` con quelle reali.
Inserire data e città del prossimo "Biancaneve si è svegliata" nella pagina Programmi.
Parole chiave SEO impostate
Gabriella Femia, La Formatrice Cinica, anticoach, coaching individuale, leadership al femminile, neuroscienze, biohacking, comunicazione strategica, public speaking, gestione del tempo, Biancaneve si è svegliata, formazione donne, coach donne, crescita personale, formatrice manageriale.
