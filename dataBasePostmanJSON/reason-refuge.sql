-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 23 mai 2023 à 17:22
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
  `date_alerte` date NOT NULL DEFAULT current_timestamp(),
  `id_alerte_config` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `alerte_config`
--

CREATE TABLE `alerte_config` (
  `id_alerte_config` int(11) NOT NULL,
  `id_condition_alerte` int(11) NOT NULL,
  `value_condition_alerte` text NOT NULL,
  `message_alerte` text NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `alerte_config`
--

INSERT INTO `alerte_config` (`id_alerte_config`, `id_condition_alerte`, `value_condition_alerte`, `message_alerte`, `id_user`) VALUES
(1, 1, '', 'achter', 2),
(2, 2, '', 'Supprimer Un produit', 2),
(3, 3, '10', 'quantite de un produit dans le stock et inferieur de 10 ', 2),
(4, 4, '', 'Modification fournisseur', 2),
(5, 5, '', 'supprimer fournisseur', 2),
(6, 6, '', 'Ajouter fournisseur', 2),
(7, 7, '', 'Supprimer Une Facture', 2);

-- --------------------------------------------------------

--
-- Structure de la table `alerte_type`
--

CREATE TABLE `alerte_type` (
  `id_type_alerte` int(11) NOT NULL,
  `type_alerte` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `alerte_type`
--

INSERT INTO `alerte_type` (`id_type_alerte`, `type_alerte`) VALUES
(1, 'success'),
(2, 'warning'),
(3, 'danger');

-- --------------------------------------------------------

--
-- Structure de la table `condition_alerte`
--

CREATE TABLE `condition_alerte` (
  `id_condition_alerte` int(11) NOT NULL,
  `condition_alerte` varchar(255) NOT NULL,
  `value_condition_alerte_ou_non` tinyint(4) NOT NULL COMMENT '0 = non value | 1 = avec value',
  `id_type_alerte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `condition_alerte`
--

INSERT INTO `condition_alerte` (`id_condition_alerte`, `condition_alerte`, `value_condition_alerte_ou_non`, `id_type_alerte`) VALUES
(1, 'Achat', 0, 1),
(2, 'Supprimer Produit', 0, 3),
(3, 'Nombre de Produit dans le stock inferieur de', 1, 2),
(4, 'Modifier fournisseur', 0, 1),
(5, 'Supprimer fournisseur', 0, 3),
(6, 'Ajouter Fournisseur', 0, 1),
(7, 'supprimer facture', 0, 3);

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

CREATE TABLE `facture` (
  `id_facture` int(11) NOT NULL,
  `date_facture` date NOT NULL DEFAULT current_timestamp(),
  `montantTotal_facture` float NOT NULL,
  `id_acheteur` int(11) NOT NULL,
  `archive` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 = non archiver | 1 = archiver'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id_produit` int(11) NOT NULL,
  `nom_produit` varchar(255) NOT NULL,
  `quantite_produit` int(255) NOT NULL,
  `price_produit` float NOT NULL,
  `id_fournisseur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `role_vendeur` tinyint(4) NOT NULL,
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
  ADD PRIMARY KEY (`id_alerte`),
  ADD KEY `id_alerte_config` (`id_alerte_config`);

--
-- Index pour la table `alerte_config`
--
ALTER TABLE `alerte_config`
  ADD PRIMARY KEY (`id_alerte_config`),
  ADD KEY `id_condition_alerte` (`id_condition_alerte`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `alerte_type`
--
ALTER TABLE `alerte_type`
  ADD PRIMARY KEY (`id_type_alerte`);

--
-- Index pour la table `condition_alerte`
--
ALTER TABLE `condition_alerte`
  ADD PRIMARY KEY (`id_condition_alerte`),
  ADD KEY `id_type_alerte` (`id_type_alerte`);

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
-- AUTO_INCREMENT pour la table `alerte_config`
--
ALTER TABLE `alerte_config`
  MODIFY `id_alerte_config` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `alerte_type`
--
ALTER TABLE `alerte_type`
  MODIFY `id_type_alerte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `condition_alerte`
--
ALTER TABLE `condition_alerte`
  MODIFY `id_condition_alerte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `facture`
--
ALTER TABLE `facture`
  MODIFY `id_facture` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

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
-- Contraintes pour la table `alerte`
--
ALTER TABLE `alerte`
  ADD CONSTRAINT `id_alerte_config` FOREIGN KEY (`id_alerte_config`) REFERENCES `alerte_config` (`id_alerte_config`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `alerte_config`
--
ALTER TABLE `alerte_config`
  ADD CONSTRAINT `id_condition_alerte` FOREIGN KEY (`id_condition_alerte`) REFERENCES `condition_alerte` (`id_condition_alerte`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `utilisateur` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `condition_alerte`
--
ALTER TABLE `condition_alerte`
  ADD CONSTRAINT `id_type_alerte` FOREIGN KEY (`id_type_alerte`) REFERENCES `alerte_type` (`id_type_alerte`) ON DELETE CASCADE ON UPDATE CASCADE;

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
