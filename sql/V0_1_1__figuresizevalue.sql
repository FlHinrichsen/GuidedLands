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
-- Tabellenstruktur für Tabelle `figuresizevalue`
--

CREATE TABLE figuresizevalue (
  id int(11) NOT NULL,
  figuresize_id int(11) NOT NULL,
  death_low int(11) NOT NULL,
  death_high int(11) NOT NULL,
  insury_low int(11) NOT NULL,
  insury_high int(11) NOT NULL,
  life_low int(11) NOT NULL,
  life_high int(11) NOT NULL,
  initiative int(11) NOT NULL,
  price int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes für die Tabelle `figuresizevalue`
--
ALTER TABLE figuresizevalue
  ADD PRIMARY KEY (id);

--
-- Constraints der Tabelle `figuresizevalue`
--
ALTER TABLE figuresizevalue
  ADD CONSTRAINT figuresizevalue_1` FOREIGN KEY (figuresize_id) REFERENCES figuresize (id);

INSERT INTO figuresizevalue(figuresize_id, death_low, death_high, insury_low, insury_high, life_low, life_high, initiative, price) 
VALUES ((SELECT id FROM figuresize WHERE text = 'Klein'), 6, 12, 2, 4, 2, 4, 1, 3);

INSERT INTO figuresizevalue(figuresize_id, death_low, death_high, insury_low, insury_high, life_low, life_high, initiative, price) 
VALUES ((SELECT id FROM figuresize WHERE text = 'Mittel'), 8, 14, 3, 6, 3, 5, 0, 0);

INSERT INTO figuresizevalue(figuresize_id, death_low, death_high, insury_low, insury_high, life_low, life_high, initiative, price) 
VALUES ((SELECT id FROM figuresize WHERE text = 'Groß'), 10, 16, 4, 8, 4, 6, -1, -3);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
