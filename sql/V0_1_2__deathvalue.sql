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
-- Tabellenstruktur für Tabelle `deathvalue`
--

CREATE TABLE deathvalue (
  death int(11) NOT NULL,
  price int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO deathvalue(death, price) VALUES ( 6, 10);
INSERT INTO deathvalue(death, price) VALUES ( 7, 11);
INSERT INTO deathvalue(death, price) VALUES ( 8, 12);
INSERT INTO deathvalue(death, price) VALUES ( 9, 14);
INSERT INTO deathvalue(death, price) VALUES (10, 16);
INSERT INTO deathvalue(death, price) VALUES (11, 19);
INSERT INTO deathvalue(death, price) VALUES (12, 22);
INSERT INTO deathvalue(death, price) VALUES (13, 26);
INSERT INTO deathvalue(death, price) VALUES (14, 30);
INSERT INTO deathvalue(death, price) VALUES (15, 35);
INSERT INTO deathvalue(death, price) VALUES (16, 40);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
