START TRANSACTION;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `guidedlands`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `size`
--

CREATE TABLE figuresize (
  id int(11) NOT NULL,
  low float(11) NOT NULL,
  high float(11) NOT NULL,
  text varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes für die Tabelle `Allianz`
--
ALTER TABLE figuresize
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT für Tabelle `figuresize`
--
ALTER TABLE figuresize
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO figuresize(low, high, text) VALUES (1.6, 2.7, 'Klein');
INSERT INTO figuresize(low, high, text) VALUES (2.7, 4, 'Mittel');
INSERT INTO figuresize(low, high, text) VALUES (4, 7, 'Groß');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
