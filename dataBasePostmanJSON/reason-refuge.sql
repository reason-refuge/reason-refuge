-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 19 mai 2023 à 17:24
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `reason-refuge`
--

-- --------------------------------------------------------

--
-- Structure de la table `achat`
--

CREATE TABLE `achat` (
  `id_achat` int(11) NOT NULL,
  `date_achat` date DEFAULT current_timestamp(),
  `montantTotal_achat` float NOT NULL,
  `id_produit` int(11) NOT NULL,
  `id_acheteur` int(11) NOT NULL,
  `id_vendeur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `alerte`
--

CREATE TABLE `alerte` (
  `id_alerte` int(11) NOT NULL,
  `date_alerte` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

CREATE TABLE `facture` (
  `id_facture` int(11) NOT NULL,
  `date_facture` date NOT NULL DEFAULT current_timestamp(),
  `montantTotal_facture` float NOT NULL,
  `id_acheteur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id_produit` int(11) NOT NULL,
  `nom_produit` varchar(255) NOT NULL,
  `quantite_produit` int(11) NOT NULL,
  `price_produit` float NOT NULL,
  `id_fournisseur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id_produit`, `nom_produit`, `quantite_produit`, `price_produit`, `id_fournisseur`) VALUES
(1, 'riha fana', 283, 62, 1);

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL,
  `date_stock` date NOT NULL DEFAULT current_timestamp(),
  `montantTotal_stock` float NOT NULL,
  `id_produit` int(11) NOT NULL,
  `id_acheteur` int(11) NOT NULL,
  `id_vendeur` int(11) NOT NULL,
  `quantite_stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_user` int(11) NOT NULL,
  `nom_user` varchar(255) NOT NULL,
  `prenom_user` varchar(255) NOT NULL,
  `adresse_user` text NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `password_user` varchar(255) NOT NULL,
  `role_user` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 = user | 1 = admin | 2 = fournisseur'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_user`, `nom_user`, `prenom_user`, `adresse_user`, `email_user`, `password_user`, `role_user`) VALUES
(1, 'fournisseurEZR324T', 'fournisseur', 'fournisseur adresse', 'fournisseur@gmail.com', '$2y$10$vFqZha/8U4YBOiHQ9auBSuNH6qpMqM9atpIardznCGF0HKKrnA1xi', 2),
(2, 'bouchettoy', 'marouane', 'Rue My Youssef Residence Raha 3eme Etage Appartemment Numro 27', 'user@gmail.com', '$2y$10$MZDlDFELIt0nqAiFb6.aKOrcnzYLU/3vjUoneCwjwAI0EVrpPZ3sO', 0),
(3, 'admin', 'admin', 'admin adresse', 'admin@gmail.com', '$2y$10$vFqZha/8U4YBOiHQ9auBSuNH6qpMqM9atpIardznCGF0HKKrnA1xi', 1),
(4, 'admin', 'admin', 'admin adresse', 'uanemaro216@gmail.com', '$2y$10$GOagqMNLJ2kdTKmX3UTXK./MOcneY2lg.GLin1icXKRPrdA21bzHe', 1),
(5, 'bouchettoy', 'marouane', 'Rue My Youssef Residence Raha 3eme Etage Appartemment Numro 27', 'uanemaro89@gmail.com', '$2y$10$TXuJNarQcXRldP3EQfGu7uSE3FHn1a8QQ69z6DJp2rQ5qlVkyN8DC', 1),
(6, 'bouchettoy', 'marouane', 'Rue My Youssef Residence Raha 3eme Etage Appartemment Numro 27', 'uanemaro350@gmail.com', '$2y$10$f68V6CujTg3.HKX.zZwmXO.T85MWj9iW0dWNVn6THqBd2ga./XEp.', 1),
(14, 'bouchettoy', 'marouane', 'Rue My Youssef Residence Raha 3eme Etage Appartemment Numro 27', 'uanemaro21fdgdrz6@gmail.com', '$2y$10$b5ZDvgw57PUGIp.2qnC.1u1uvRuAntMJrHVbU0EvC39ruk688IaqS', 0),
(15, 'bouchettoy', 'marouane', 'Rue My Youssef Residence Raha 3eme Etage Appartemment Numro 27', 'uanemaro2DSFGSREGDS16@gmail.com', '$2y$10$.nd8doHeBDGJVm1ptr05TeLxAi.CFybF2rdEhU2MLDiMB99Etma9O', 1),
(16, 'bouchettoyfdhgfdg', 'fdg', 'Rue My Youssef Residence Raha 3eme Etage Appartemment Numro 27', 'uanemaro21fdgsfdg6@gmail.com', '$2y$10$MZDlDFELIt0nqAiFb6.aKOrcnzYLU/3vjUoneCwjwAI0EVrpPZ3sO', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `achat`
--
ALTER TABLE `achat`
  ADD PRIMARY KEY (`id_achat`),
  ADD KEY `user_acheteur` (`id_acheteur`),
  ADD KEY `user_vendeur` (`id_vendeur`),
  ADD KEY `produit` (`id_produit`);

--
-- Index pour la table `alerte`
--
ALTER TABLE `alerte`
  ADD PRIMARY KEY (`id_alerte`);

--
-- Index pour la table `facture`
--
ALTER TABLE `facture`
  ADD PRIMARY KEY (`id_facture`),
  ADD KEY `facture_achetteur_user` (`id_acheteur`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id_produit`),
  ADD KEY `user_produit` (`id_fournisseur`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_stock`),
  ADD KEY `id_produit` (`id_produit`),
  ADD KEY `id_acheteur` (`id_acheteur`),
  ADD KEY `id_vendeur` (`id_vendeur`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `achat`
--
ALTER TABLE `achat`
  MODIFY `id_achat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `alerte`
--
ALTER TABLE `alerte`
  MODIFY `id_alerte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `facture`
--
ALTER TABLE `facture`
  MODIFY `id_facture` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `achat`
--
ALTER TABLE `achat`
  ADD CONSTRAINT `produit` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_acheteur` FOREIGN KEY (`id_acheteur`) REFERENCES `utilisateur` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_vendeur` FOREIGN KEY (`id_vendeur`) REFERENCES `utilisateur` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `facture_achetteur_user` FOREIGN KEY (`id_acheteur`) REFERENCES `utilisateur` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `user_produit` FOREIGN KEY (`id_fournisseur`) REFERENCES `utilisateur` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `id_acheteur` FOREIGN KEY (`id_acheteur`) REFERENCES `utilisateur` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_produit` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_vendeur` FOREIGN KEY (`id_vendeur`) REFERENCES `utilisateur` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
