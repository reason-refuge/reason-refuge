<section class="ftco-section fixNav">
	<div style="width: 100% !important;z-index: 10000 !important;">
		<nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
			<div class="container-fluid">
				<a class="navbar-brand" href="<?= URLROOT ?>users/dashboard"><img class="logoNav" src="<?= URLROOT ?>layout/image/logo-reason-rufuge.png" alt="logo"></a>
				<div class="social-media order-lg-last">
					<p class="mb-0 d-flex">
						<sMe class="d-flex align-items-center justify-content-center" id="AlertId" onclick="afficherAlert()"><span class="fa fa-bell" title="Alerts"><i class="sr-only">Alerts</i></span></sMe>
						<a href="<?= URLROOT ?>users/logout" class="d-flex align-items-center justify-content-center"><span class="fa fa-user" title="LogOut"><i class="sr-only">LogOut</i></span></a>
					</p>
				</div>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="fa fa-bars"></span> Menu
				</button>
				<div class="collapse navbar-collapse" id="ftco-nav">
					<ul class="navbar-nav ml-auto mr-md-3">
						<li class="nav-item"><a href="<?= URLROOT ?>users/dashboard" class="nav-link">Dashboard</a></li>
						<li class="nav-item"><a href="<?= URLROOT ?>users/fournisseurs" class="nav-link">Fournisseurs</a></li>
						<li class="nav-item"><a href="<?= URLROOT ?>users/alertes" class="nav-link">Alertes Controle</a></li>
						<li class="nav-item"><a href="<?= URLROOT ?>users/produits" class="nav-link">Produits</a></li>
						<li class="nav-item"><a href="<?= URLROOT ?>users/factures" class="nav-link">Factures</a></li>
						<li class="nav-item"><a href="<?= URLROOT ?>users/stock" class="nav-link">Stock</a></li>
						<li class="nav-item"><a href="<?= URLROOT ?>users/achats" class="nav-link">Achats</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<!-- END nav -->
	</div>
	<saidBar id='saidBar'>
		<div class="alert alert-danger" role="alert">
			A simple danger alert—check it out!
		</div>
		<div class="alert alert-warning" role="alert">
			A simple warning alert—check it out!
		</div>
		<div class="alert alert-info" role="alert">
			A simple info alert—check it out!
		</div>
		<div class="alert alert-light" role="alert">
			A simple light alert—check it out!
		</div>
		<div class="alert alert-dark" role="alert">
			A simple dark alert—check it out!
		</div>
		Alerts
	</saidBar>
</section>
<?php $includeAlertJsFile = "" ?>