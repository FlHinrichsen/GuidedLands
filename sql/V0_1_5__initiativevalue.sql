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
-- Tabellenstruktur für Tabelle `initiativevalue`
--

CREATE TABLE initiativevalue (
  initiative int(11) NOT NULL,
  price int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO initiativevalue(initiative, price) VALUES ( 1, 1);
INSERT INTO initiativevalue(initiative, price) VALUES ( 2, 2);
INSERT INTO initiativevalue(initiative, price) VALUES ( 3, 3);
INSERT INTO initiativevalue(initiative, price) VALUES ( 4, 4);
INSERT INTO initiativevalue(initiative, price) VALUES ( 5, 5);
INSERT INTO initiativevalue(initiative, price) VALUES ( 6, 6);
INSERT INTO initiativevalue(initiative, price) VALUES ( 7, 7);
INSERT INTO initiativevalue(initiative, price) VALUES ( 8, 9);
INSERT INTO initiativevalue(initiative, price) VALUES ( 9, 11);
INSERT INTO initiativevalue(initiative, price) VALUES (10, 14);
INSERT INTO initiativevalue(initiative, price) VALUES (11, 17);
INSERT INTO initiativevalue(initiative, price) VALUES (12, 21);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
