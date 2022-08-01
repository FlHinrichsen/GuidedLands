START TRANSACTION;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `guidedlands`
--

-- --------------------------------------------------------

ALTER TABLE figuresize RENAME data_figuresize
ALTER TABLE figuresizevalue RENAME data_figuresizevalue
ALTER TABLE deathvalue RENAME data_deathvalue
ALTER TABLE injuryvalue RENAME data_injuryvalue
ALTER TABLE lifevalue RENAME data_lifevalue
ALTER TABLE initiativevalue RENAME data_initiativevalue

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
