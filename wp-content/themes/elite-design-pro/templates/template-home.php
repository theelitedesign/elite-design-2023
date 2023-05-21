<?php
/**
 * Template Name: Homepage
 * Template Post Type: page
 *
 * This template is for displaying home page.
 *
 * @link https://developer.wordpress.org/themes/template-files-section/page-template-files/
 *
 * @package ELITE Design
 * @since 1.0.0
 *
 */

// Include header
get_header();

// Global variables
global $option_fields;
global $pID;
global $fields;

$elite_tthherot_tleon = (isset($fields['elite_tthherot_tleon']) && $fields['elite_tthherot_tleon']!='' ) ? $fields['elite_tthherot_tleon'] : null;
$elite_tthherot_tletw = (isset($fields['elite_tthherot_tletw']) && $fields['elite_tthherot_tletw']!='' ) ? $fields['elite_tthherot_tletw'] : null;



?> <section id="hero-section" class="hero-section at-right-section">
	<!-- Hero Start -->
			<h1 class="hide"></h1>
			<div class="hero-ctn hero-home-ctn">
				<div class="wrapper">
					<div class="hero-home-title-row hero-home-title-row-one">
						<div class="text__first-bg"></div>
						<?php if($elite_tthherot_tleon){?>
							<div class="hero-home-title-row-inner text__word">
								<?php echo $elite_tthherot_tleon; ?>
							</div>
						<?php } ?>
					</div>
					<div class="hero-home-title-row hero-home-title-row-two">
						<div class="text__second-bg"></div>
						<?php if($elite_tthherot_tletw){?><div class="hero-home-title-row-inner text__word"><?php echo $elite_tthherot_tletw; ?></div><?php } ?>
					</div>
				</div>
			</div>
	<!-- Hero End -->
</section>
<section id="page-section" class="page-section">
	<!-- Content Start --> <?php while ( have_posts() ) { the_post();
		//Include specific template for the content.
		get_template_part( 'partials/content', 'page' );

	} ?> <div class="clear"></div>
	<div class="ts-80"></div>
	<!-- Content End -->
</section> <?php get_footer(); ?>
