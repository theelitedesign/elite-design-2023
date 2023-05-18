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

$elitedesign_pagetitle = (isset($fields['elite_thherot_kiker']) && $fields['elite_thherot_kiker']!='' ) ? $fields['elite_thherot_kiker'] : get_the_title();
$elite_thherot_txt = (isset($fields['elite_thherot_txt']) && $fields['elite_thherot_txt']!='' ) ? $fields['elite_thherot_txt'] : null;
$elite_thherot_btnone = (isset($fields['elite_thherot_btnone']) && $fields['elite_thherot_btnone']!='' ) ? $fields['elite_thherot_btnone'] : null;
$elite_thherot_btntwo = (isset($fields['elite_thherot_btntwo']) && $fields['elite_thherot_btntwo']!='' ) ? $fields['elite_thherot_btntwo'] : null;


?> <section id="hero-section" class="hero-section">
	<!-- Hero Start -->
		<div class="hero hero-ctn hero--home">
				<div class="wrapper">
					<div class="hero__content">

						<div class="overline"><?php echo $elitedesign_pagetitle; ?></div>
							<?php if($elite_thherot_txt){ ?>
						<h1><?php echo esc_html($elite_thherot_txt);?></h1>
								<?php } ?>
						<div class="hero__buttons">
						<?php
							if( $elite_thherot_btnone ) :
								echo glide_acf_button( $elite_thherot_btnone, 'button big' );
							endif;
						?>
						<?php
							if( $elite_thherot_btntwo ) :
								echo glide_acf_button( $elite_thherot_btntwo, 'button big' );
							endif;
						?>
						</div>
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
