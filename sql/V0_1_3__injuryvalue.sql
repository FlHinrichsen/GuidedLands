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
-- Tabellenstruktur für Tabelle `injuryvalue`
--

CREATE TABLE injuryvalue (
  injury int(11) NOT NULL,
  price int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO deathvalue(injury, price) VALUES (2, 4);
INSERT INTO deathvalue(injury, price) VALUES (3, 5);
INSERT INTO deathvalue(injury, price) VALUES (4, 7);
INSERT INTO deathvalue(injury, price) VALUES (5, 10);
INSERT INTO deathvalue(injury, price) VALUES (6, 13);
INSERT INTO deathvalue(injury, price) VALUES (7, 17);
INSERT INTO deathvalue(injury, price) VALUES (8, 21);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
