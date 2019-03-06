# Website des Vereins "Digitale Oberlausitz e. V."

## Anleitungen

### Neue News / Events hinzufügen

Um neue News oder Events anzulegen, muss eine Markdown-Datei im Verzeichnis `content/news` bzw. `content/events`
angelegt werden.

Der Dateiname bestimmt die spätere URL, unter dem der Beitrag erreichbar sein wird. Aus `content/news/my-fancy-news.md`
wird später `https://digitale-oberlausitz.eu/news/my-fancy-news`. Auch Unterverzeichnisse können verwendet werden.
Beispielsweise wird aus `content/news/2018/my-fancy-news.md` dann
`https://digitale-oberlausitz .eu/news/2018/my-fancy-news`.

In der Markdown-Datei muss ein Header gesetzt werden nach diesem Muster:

    ---
    title: "Die Überschrift der News"
    date: "2018-07-25"
    ---

Das Datum wird für die Sortierung der Einträge in der Übersicht genutzt.

Um die Übersichtlichkeit zu steigern, können auf den Überblick-Seiten (z.B. unter "Aktuelles") nur Kurzfassungen der
Artikel angezeigt werden. Ein Klick auf "mehr anzeigen..." führt dann zum vollständigen Artikel auf einer eigenen
Unterseite.

Um eine solche Kurzfassung zu erzeugen wird im Markdown-Dokument der Marker `<!--more-->` gesetzt. Dieser markiert die
Stelle, an der in der Übersichtsseite abgeschnitten wird.

Als Beispiel:

    ---
    title: "Eine Überschrift"
    date: "2018-10-10"
    ---

    Dieser Teil ist in der Übersicht zu sehen.
    <!--more-->
    Dieser Teil nicht mehr.
    
    
#### Sonderfall Java-User-Group

Events der [JUG Görlitz](https://jug-gr.de) werden automatisch als Events aufgenommen, ohne dass dazu hier Markdown-Dateien
ergänzt werden müssen. 
Die Informationen zur den Events werden aus dem [Atom-Feed](https://jug-gr.de/atom.xml) geladen.
Dies passiert jedoch, wie bei Gatsby üblich, zum Build-Zeitpunkt.
Wurde ein neues Event auf der JUG-Seite ergänzt, wird dieses also nicht unmittelbar auch auf dieser Webseite hier erscheinen.
Damit die JUG-Events auch auf der Vereinsseite erscheinen, muss die Vereinsseite neu gebaut werden.


#### Sonderfall Linux-Stammtisch Görlitz

Events des Linux-Stammtisch Görlitz werden als normale Events angelegt. 
Zusätzlich ist Vorgesehen, dass aus den Events eine ICAL/ICS-Datei mit den Events erzeugt wird. 
Dazu sind zusätzliche Felder im Header der Markdown-Datei notwendig:

	---
    title: "Linux-Stammtisch März"
    date: "2019-03-08"
    ical: "linux-stammtisch"
    location: "Dreibeiniger Hund, Büttnerstr. 13, 02826 Görlitz"
    startTime: "19:00"
    endTime: "21:30"
    ---

Neu sind die Optionen:

- 'ical': Dies bestimmt den Kalender, in welchem der Termin eingetragen ist. Für den Linux-Stammtisch immer "linux-stammtisch" eintragen!
- 'location': Der Ort für den Event. Jeder beliebige String ist möglich. Da einige Calendar-Apps aber einen Abgleich mit Google-Maps durchführen, 
wäre ein kompatibler Such-String sinnvoll
- 'startTime' / 'endTime': Die Start- und Ende-Zeit für das Event. Muss als String im Format "HH:MM" angegeben werden.


### Neue statische Seiten ergänzen

Das Hinzufügen von statischen Seiten funktioniert äquivalent zu News und Events. Die entsprechenden Markdown-Dateien
müssen sich dazu im Verzeichnis `content/pages` befinden.

Sie sind anschließend direkt ohne Prefix in der URL erreichbar: Aus `content/pages/satzung.md` wird
`https://digitale-oberlausitz.eu/satzung`. Deshalb ist es hier besonders wichtig darauf zu achten, dass keine
Überschneidungen mit dynamisch generierten Seiten wie `/events` oder `/projekte` auftreten. Diese werden mittels
JavaScript im Verzeichnis `src/pages` gesteuert.

Der Unterschied ist, dass JavaScript-Basierte Seiten aus `src/pages` dynamischen Inhalt enthalten können, beispielsweise
listed `src/pages/events.js` alle vorhandenen Events in einer Übersichtsseite auf. Statische Seite aus `content/pages`
dagegen werden lediglich von Markdown zu HTML gewandelt.

Statische Seiten aus `content/pages` werden nicht automatisch verlinkt oder aufgelistet. Sie müssen händisch im Layout
der Seite verlinkt werden, können aber auch aus anderen Markdown-Dateien (news, Events, andere statische Seiten) heraus
referenziert werden.

### Seite lokal generieren

Um die Seite lokal zu generieren ist die Installation von [node.js](https://nodejs.org/en/) notwendig.

Zunächst müssen alle nötigen Bibliotheken heruntergeladen werden. Dazu dient das Kommando:

`npm install`

Anschließend kann die Generierung gestartet werden, wobei hier mehrere Möglichkeiten existieren:

`npm run develop` startet den Transformationsprozess und einen lokalen Entwicklungsserver. Damit kann einfach
ausprobiert werden, wie die Webseite gerade aussieht. Dazu öffnet man im Browser `http://localhost:8000`. Nimmt man
Änderungen an den Dateien vor, während der Entwicklungsserver läuft, werden die Änderungen automatisch in der Webseite
aktualisiert. Dieser Befehl eignet sich also hervorragend während man einen Beitrag verfasst und sehen möchte, wie
dieser letztendlich aussehen wird. Im Entwickler-Modus sind aber nicht sämtliche Funktionen der Webseite aktiv.
Beispielsweise werden keine RSS-Feeds generiert. Außerdem werden "unter der Haube" nicht alle Optimierungen
durchgeführt, die in der eigentlichen produktiv genutzen Webseite durchgeführt werden.

`npm run build` führt die richtige Generierung der Webseite durch. Anschließend ist diese im Verzeichnis `public` zu
finden. Alle Dateien aus `public` können dann auf den Webserver hochgeladen werden.

`npm run serve` startet einen lokalen Server, welcher den Inhalt aus `public` anbietet. Dieser Modus ist nützlich um zu
überprüfen, ob die real generierte Webseite (mit `npm run build`) in allen Einzelheiten funktioniert. Der Server bietet
die Seite unter `http://localhost:9000` an. Der Unterschied zum Entwicklungsserver (mit `npm run develop`) ist, dass
hier keine automatische Aktualisierung bei Änderungen in Dateien durchgeführt wird. Außerdem werden in diesem Modus
sämtliche Optimierungen der Seite durchgeführt und es sind sämtliche Funktionen aktiv, was beim Entwicklungsserver nicht
der Fall ist.

`npm run testprod` fasst die Befehle `npm run build` und `npm run serve` zusammen.

## Technische Details

Für die Entwicklung dieser Webseite wird der statische Seiten-Generator [Gatsby.js](https://www.gatsbyjs.org/) benutzt.
Statische Seiten-Generatoren sind eine Alternative zu klassischen serverseitig dynamisch generierten Webseiten.

Bei serverseitig dynamisch generierten Seiten lagern die Inhalte der Seite in einer Datenbank. Wenn ein Besucher die
Seite ansteuert, wird auf dem Server ein Programm aktiv, welches die angefragten Inhalte aus der Datenbank lädt und
dynamisch eine Webseite für den Besucher generiert.

Bei statischen Seiten-Generatoren dagegen lagern die Inhalte in der Regel als normale Text-Dateien auf der Festplatte.
Es wird einmalig ein Programm ausgeführt, welches aus diesen Inhalten die Webseite generiert. Die generierten Dateien
werden anschließend auf einen normalen Web-Server hochgeladen. Besucht jemand die Webseite, liefert der Web-Server
einfach nur die statischen Dateien an den Nutzer aus, ohne dass zu diesem Zeitpunkt noch irgendetwas dynamisch generiert
wird.

Der Unterschied liegt also zum Einen im Zeitpunkt, zu dem die Webseite generiert wird: Bei dynamischen Serveranwendungen
immer sobald ein Nutzer die Seite anfordert. Bei statischen Seitengeneratoren nur einmal wenn Inhalte geändert wurden.

Um den Umgang mit Inhalten zuvereinfachen, soll in Zukunft ein automatischer Build-Prozess eingeführt werden. Dabei wird
ein Programm automatisch die Seite neu generieren und auf den Web-Server hochladen, sobald sich Dateien geändert haben.

Eine Eigenheit von Gatsby.js, dem Programm, welches hier zur Erzeugung der Seite benutzt wird, ist, dass es nicht nur
lokal Vorhandene Testdateien als Quelle nutzen kann, sondern auch vielfältige andere Quellen wie Wikipedia-Artikel,
Datenbanken, Wordpress-Blogs oder andere Content-Management-Systeme. Gleich bleibt, dass diese Quellen nur einmalig beim
Generieren der Webseite angesprochen werden.

### Vorteile Statische Seitengeneratoren

* keine aktive Server-Anwendung und keine Datenbank - weniger Angriffsfläche für böswillige Hacker - weniger
  Anforderungen an den Server
* Inhalte sind einfache Text-Dateien - keine nervige WYSIWYG-Editor, jeder kann seinen Lieblingseditor benutzen -
  einfache Versionsverwaltung mittels git
* einfache Weiterentwicklung der Seite, da lokal getestet werden kann

### Nachteile Statische Seitengeneratoren

* keine dynamische Inhalte (z.B. Kommentare von Nutzern)

### Gatsby.js

[Gatsby.js](https://www.gatsbyjs.org/) ist ein statischer Seitengenerator, welcher in JavaScript implementiert ist. Das
Programm nutzt für die Generierung der Seite [React](https://reactjs.org/) sowie [GraphQL](https://graphql.org/).
Mittels React werden eigene Componenten und Templates für die Generierung geschrieben. In diesen werden die dazu
notwendigen Daten mittels GraphQL abgefragt. Das Resultat ist eine React-Anwendung, welche statisch an die Browser der
Nutzer ausgeliefert wird. Da React verwendet wird, kann diese Anwendung durchaus clientseitige Dynamik enthalten, z.B.
Animationen beim Übergang zwischen verschiedenen Seiten oder das dynamische Nachladen von sonstigen Inhalten.