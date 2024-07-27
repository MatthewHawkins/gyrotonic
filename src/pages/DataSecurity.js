/** @jsxImportSource @emotion/react */
import React from 'react'
import { jsx, css } from '@emotion/react'

export default function DataSecurity() {

  const pageStyles = css`
  display: flex;
  flex-direction: column;
  font-family: 'Cormorant Garamond', serif;
  padding: 0 1em;
  background-color: var(--background-color-primary);
  font-size: 1.25em;
  `;

  return (
    <div css={pageStyles}>
      <h1>Data protection</h1>
    <h2>General information and mandatory information</h2>
    <h3>Designation of the responsible body</h3>
    <p>The responsible body for data processing on this website is:</p>
    <p>
      <span id="s3-t-firma">The Roots Gyrotonic Studio</span>
      <br />
      <span id="s3-t-ansprechpartner">Federico Moiana</span>
      <br />
      <span id="s3-t-strasse">Hindenburgstrasse 65</span>
      <br />
      <span id="s3-t-plz">66119</span> <span id="s3-t-ort">Saarbrücken</span>
    </p>
    <p>
      The responsible body decides alone or jointly with others on the purposes
      and means of processing personal data (e.g. names, contact details, etc.).
    </p>
    <h3>Revocation of your consent to data processing</h3>
    <p>
      Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
      Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
      Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose
      Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
      Datenverarbeitung bleibt vom Widerruf unberührt.
    </p>
    <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
    <p>
      Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes
      ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige
      Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
      Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz
      unseres Unternehmens befindet. Der folgende Link stellt eine Liste der
      Datenschutzbeauftragten sowie deren Kontaktdaten bereit:{' '}
      <a
        href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
      </a>
      .
    </p>
    <h3>Recht auf Datenübertragbarkeit</h3>
    <p>
      Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung
      oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
      an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem
      maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an
      einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
      technisch machbar ist.
    </p>
    <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
    <p>
      Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das
      Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
      Daten, Herkunft der Daten, deren Empfänger und den Zweck der
      Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder
      Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema
      personenbezogene Daten können Sie sich jederzeit über die im Impressum
      aufgeführten Kontaktmöglichkeiten an uns wenden.
    </p>
    <h3>SSL- bzw. TLS-Verschlüsselung</h3>
    <p>
      Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
      Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website
      eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese
      Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine
      verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und
      am Schloss-Symbol in der Browserzeile.
    </p>
    <h2>Kontaktformular</h2>
    <p>
      Per Kontaktformular übermittelte Daten werden einschließlich Ihrer
      Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für
      Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne
      Ihre Einwilligung nicht statt.
    </p>
    <p>
      Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
      ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
      DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit
      möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die
      Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge
      bleibt vom Widerruf unberührt.
    </p>
    <p>
      Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie
      uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen
      oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende
      gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben
      unberührt.
    </p>
    <h2>Google Maps</h2>
    <h3>Art und Umfang der Verarbeitung</h3>
    <p>
      Wir verwenden zur Erstellung von Anfahrtsbeschreibungen den Kartendienst
      Google Maps. Google Maps ist ein Dienst der Google Ireland Limited, welcher
      auf unserer Website eine Karte darstellt. Wenn Sie auf diese Inhalte
      unserer Website zugreifen, stellen Sie eine Verbindung zu Servern der
      Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland her,
      wobei Ihre IP-Adresse und ggf. Browserdaten wie Ihr User-Agent übermittelt
      werden. Diese Daten werden ausschließlich zu den oben genannten Zwecken und
      zur Aufrechterhaltung der Sicherheit und Funktionalität von Google Maps
      verarbeitet.
    </p>
    <h3>Zweck und Rechtsgrundlage</h3>
    <p>
      Der Einsatz von Google Maps erfolgt auf Grundlage Ihrer Einwilligung gemäß
      Art. 6 Abs. 1 lit. a. DSGVO und § 25 Abs. 1 TTDSG.
    </p>
    <p>
      Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des
      Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In
      Fällen, in denen kein Angemessenheitsbeschluss der Europäischen Kommission
      existiert (z.B. in den USA) haben wir mit den Empfängern der Daten
      anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO vereinbart.
      Dies sind – sofern nicht anders angegeben – Standardvertragsklauseln der
      EU-Kommission gemäß Durchführungsbeschluss (EU) 2021/914 vom 4. Juni 2021.
      Eine Kopie dieser Standardvertragsklauseln können Sie unter{' '}
      <a
        href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE
      </a>{' '}
      einsehen.
    </p>
    <p>
      Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung nach
      Art. 49 Abs. 1 Satz 1 lit. a. DSGVO ein, die Sie über die Einwilligung im
      Consent Manager (oder sonstigen Formularen, Registrierungen etc.) erteilen.
      Wir weisen Sie darauf hin, dass bei Drittlandübermittlungen im Detail
      unbekannte Risiken (z.B. die Datenverarbeitung durch Sicherheitsbehörden
      des Drittlandes, deren genauer Umfang und deren Folgen für Sie wir nicht
      kennen, auf die wir keinen Einfluss haben und von denen Sie unter Umständen
      keine Kenntnis erlangen) bestehen können.
    </p>
    <h3>Speicherdauer</h3>
    <p>
      Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns
      beeinflussbar, sondern wird von Google Ireland Limited bestimmt. Weitere
      Hinweise finden Sie in der Datenschutzerklärung für Google Maps:{' '}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://policies.google.com/privacy
      </a>
      .
    </p>
    <h2>Google Web Fonts</h2>
    <h3>Art und Umfang der Verarbeitung</h3>
    <p>
      Wir verwenden Google Fonts von Google Ireland Limited, Gordon House, Barrow
      Street, Dublin 4, Irland, als Dienst zur Bereitstellung von Schriftarten
      für unser Onlineangebot. Um diese Schriftarten zu beziehen, stellen Sie
      eine Verbindung zu Servern von Google Ireland Limited her, wobei Ihre
      IP-Adresse übertragen wird.
    </p>
    <h3>Zweck und Rechtsgrundlage</h3>
    <p>
      Der Einsatz von Google Fonts erfolgt auf Grundlage Ihrer Einwilligung gemäß
      Art. 6 Abs. 1 lit. a. DSGVO und § 25 Abs. 1 TTDSG.
    </p>
    <p>
      Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des
      Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In
      Fällen, in denen kein Angemessenheitsbeschluss der Europäischen Kommission
      existiert (z.B. in den USA) haben wir mit den Empfängern der Daten
      anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO vereinbart.
      Dies sind – sofern nicht anders angegeben – Standardvertragsklauseln der
      EU-Kommission gemäß Durchführungsbeschluss (EU) 2021/914 vom 4. Juni 2021.
      Eine Kopie dieser Standardvertragsklauseln können Sie unter{' '}
      <a
        href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE
      </a>{' '}
      einsehen.
    </p>
    <p>
      Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung nach
      Art. 49 Abs. 1 Satz 1 lit. a. DSGVO ein, die Sie über die Einwilligung im
      Consent Manager (oder sonstigen Formularen, Registrierungen etc.) erteilen.
      Wir weisen Sie darauf hin, dass bei Drittlandübermittlungen im Detail
      unbekannte Risiken (z.B. die Datenverarbeitung durch Sicherheitsbehörden
      des Drittlandes, deren genauer Umfang und deren Folgen für Sie wir nicht
      kennen, auf die wir keinen Einfluss haben und von denen Sie unter Umständen
      keine Kenntnis erlangen) bestehen können.
    </p>
      </div>
        )
}
