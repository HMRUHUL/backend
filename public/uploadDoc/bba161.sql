-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2022 at 06:17 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bba`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `record_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `name`, `record_id`) VALUES
(28, 'Board Meeting', 470111),
(34, 'rfgdsf', 34646),
(41, 'dfgdfg', 4353),
(43, 'hfhfgh', 456456);

-- --------------------------------------------------------

--
-- Table structure for table `fileupload`
--

CREATE TABLE `fileupload` (
  `id` int(11) NOT NULL,
  `filename` varchar(100) NOT NULL,
  `record_id` int(11) DEFAULT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fileupload`
--

INSERT INTO `fileupload` (`id`, `filename`, `record_id`, `size`) VALUES
(287, 'board meeting 047.pdf', 470111, 6548774),
(288, 'board meeting 048.pdf', 470111, 9571715),
(289, 'board meeting 049.pdf', 470111, 9532399),
(290, 'board meeting 050 - not found.pdf', 470111, 12263529),
(291, 'board meeting 051.pdf', 470111, 12263529),
(292, 'board meeting 052.pdf', 470111, 7385202),
(293, 'board meeting 053.pdf', 470111, 17634382),
(294, 'board meeting 054.pdf', 470111, 9828692),
(295, 'board meeting 055.pdf', 470111, 10699678),
(296, 'board meeting 056.pdf', 470111, 28247256),
(297, 'board meeting 057.pdf', 470111, 14844642),
(298, 'board meeting 058.pdf', 470111, 7524005),
(299, 'board meeting 059.pdf', 470111, 24828818),
(300, 'board meeting 060.pdf', 470111, 16493049),
(301, 'board meeting 061.pdf', 470111, 5395107),
(302, 'board meeting 062.pdf', 470111, 27238546),
(303, 'board meeting 063.pdf', 470111, 9822828),
(304, 'board meeting 064.pdf', 470111, 7912077),
(305, 'board meeting 065.pdf', 470111, 2578933),
(306, 'board meeting 066.pdf', 470111, 15468596),
(307, 'board meeting 067.pdf', 470111, 8098831),
(308, 'board meeting 068.pdf', 470111, 4541060),
(309, 'board meeting 069.pdf', 470111, 4135380),
(310, 'board meeting 070.pdf', 470111, 10321028),
(311, 'board meeting 071.pdf', 470111, 3296409),
(312, 'board meeting 072.pdf', 470111, 9869053),
(313, 'board meeting 073.pdf', 470111, 10354868),
(314, 'board meeting 074.pdf', 470111, 10936396),
(315, 'board meeting 075.pdf', 470111, 11170876),
(316, 'board meeting 076.pdf', 470111, 7160591),
(317, 'board meeting 077.pdf', 470111, 3410238),
(318, 'board meeting 078.pdf', 470111, 11206566),
(319, 'board meeting 079.pdf', 470111, 5085914),
(320, 'board meeting 080.pdf', 470111, 4757561),
(321, 'board meeting 081.pdf', 470111, 5595598),
(322, 'board meeting 082.pdf', 470111, 4152200),
(323, 'board meeting 083.pdf', 470111, 7999459),
(324, 'board meeting 084.pdf', 470111, 11313044),
(325, 'board meeting 085.pdf', 470111, 16891766),
(326, 'board meeting 086.pdf', 470111, 10617238),
(327, 'board meeting 087.pdf', 470111, 8524829),
(328, 'board meeting 088.pdf', 470111, 7822686),
(329, 'board meeting 089.pdf', 470111, 4312982),
(330, 'board meeting 090.pdf', 470111, 8119748),
(331, 'board meeting 091.pdf', 470111, 6005403),
(332, 'board meeting 092.pdf', 470111, 5361340),
(333, 'board meeting 093.pdf', 470111, 7474177),
(334, 'board meeting 094.pdf', 470111, 6161566),
(335, 'board meeting 095.pdf', 470111, 7258134),
(336, 'board meeting 096.pdf', 470111, 5866705),
(337, 'board meeting 097.pdf', 470111, 7143515),
(338, 'board meeting 098.pdf', 470111, 2412488),
(339, 'board meeting 099.pdf', 470111, 4276539),
(340, 'board meeting 100.pdf', 470111, 5977645),
(341, 'board meeting 101.pdf', 470111, 2011332),
(342, 'board meeting 102.pdf', 470111, 1703307),
(343, 'board meeting 103.pdf', 470111, 1922971),
(344, 'board meeting 104.pdf', 470111, 1982227),
(345, 'board meeting 105.pdf', 470111, 1853230),
(346, 'board meeting 106.pdf', 470111, 2721855),
(347, 'board meeting 107.pdf', 470111, 1336712),
(348, 'board meeting 108.pdf', 470111, 2129996),
(349, 'board meeting 109.pdf', 470111, 1204703),
(350, 'board meeting 110.pdf', 470111, 2673702),
(351, 'board meeting 111.pdf', 470111, 331773),
(354, 'md. sajal  hossain - cv.pdf', 24, 257593),
(355, 'img_2021-05-18-22-58-34-440.jpg', 53445, 9970275),
(356, 'img_2021-05-18-22-58-34-440.jpg', 34646, 9970275),
(357, 'img_2021-05-18-22-57-52-710.jpg', 34646, 7910261),
(366, 'img_20190605_095316.jpg', 456456, 149958);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fileupload`
--
ALTER TABLE `fileupload`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `fileupload`
--
ALTER TABLE `fileupload`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=372;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
