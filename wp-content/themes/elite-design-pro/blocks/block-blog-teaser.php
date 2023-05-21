<?php
/**
 * Block Name: Blog Teaser
 *
 * The template for displaying the custom gutenberg block named Blog Teaser.
 *
 * @link https://www.advancedcustomfields.com/resources/blocks/
 *
 * @package ELITE Design
 * @since 1.0.0
 */

// Get all the fields from ACF for this block ID
// $block_fields = get_fields( $block['id'] );
$block_fields = get_fields_escaped( $block['id'] );
// $block_fields = get_fields_escaped( $block['id'] ,'sanitize_text_field' ); // if want to remove all html

// Set the block name for it's ID & class from it's file name
$block_glide_name = $block['name'];
$block_glide_name = str_replace("acf/" , "" , $block_glide_name);

// Set the preview thumbnail for this block for gutenberg editor view.
if( isset( $block['data']['preview_image_help'] )  ) {    /* rendering in inserter preview  */
	echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';
}

// create align class ("alignwide") from block setting ("wide").
$align_class = $block['align'] ? 'align' . $block['align'] : '';

// Get the class name for the block to be used for it.
$class_name = (isset($block['className'])) ? $block['className'] : null;

// Making the unique ID for the block.
$id = 'block-' .$block_glide_name . "-" . $block['id'];

// Making the unique ID for the block.
if($block['name']){
	$block_name = $block['name'];
	$block_name = str_replace("/" , "-" , $block_name);
	$name = 'block-' .  $block_name;
}

// Block variables
// $custom_field_of_block = html_entity_decode($block_fields['custom_field_of_block']); // for keeping html from input

// $custom_field_of_block = html_entity_remove($block_fields['custom_field_of_block']); // for removing html from inputa

?>

<div id="<?php echo $id; ?>" class="<?php echo $align_class . ' ' . $class_name. ' ' . $name; ?> glide-block-<?php echo $block_glide_name; ?>">

<section class="at-right-section blog-teaser-ctn">
			<div class="js-white-ctn"></div>
			<div class="recent-articles-ctn">
				<div class="inner-wrapper">
					<h2 class="mb-70">Hot stories</h2>
				</div>
				<div class="story-article-row">
					<article class="story-article">
						<div class="inner-wrapper flex">
							<div class="article-content">
								<div class="article-tags">
									<div class="article-tag tag blue">HOT OFF THE PRESS</div>
									<div class="article-tag tag aqua">HOT OFF THE PRESS</div>
								</div>
								<a href="#" class="artile-title heading-4">ELITE makes Inc. 5000 list 3 years running</a>
							</div>
							<div class="article-button">
								<a href="#" class="button small">Read article</a>
							</div>
						</div>
					</article>
					<article class="story-article">
						<div class="inner-wrapper flex">
							<div class="article-content">
								<div class="article-tags">
									<div class="article-tag tag aqua">HOT OFF THE PRESS</div>
								</div>
								<a href="#" class="artile-title heading-4">ELITE makes Inc. 5000 list 3 years running</a>
							</div>
							<div class="article-button">
								<a href="#" class="button small">Read article</a>
							</div>
						</div>
					</article>
					<article class="story-article">
						<div class="inner-wrapper flex">
							<div class="article-content">
								<div class="article-tags">
									<div class="article-tag tag blue">HOT OFF THE PRESS</div>
									<div class="article-tag tag aqua">HOT OFF THE PRESS</div>
								</div>
								<a href="#" class="artile-title heading-4">ELITE makes Inc. 5000 list 3 years running</a>
							</div>
							<div class="article-button">
								<a href="#" class="button small">Read article</a>
							</div>
						</div>
					</article>
					<article class="story-article">
						<div class="inner-wrapper flex">
							<div class="article-content">
								<div class="article-tags">
									<div class="article-tag tag blue">HOT OFF THE PRESS</div>
								</div>
								<a href="#" class="artile-title heading-4">ELITE makes Inc. 5000 list 3 years running</a>
							</div>
							<div class="article-button">
								<a href="#" class="button small">Read article</a>
							</div>
						</div>
					</article>
					<article class="story-article">
						<div class="inner-wrapper flex">
							<div class="article-content">
								<div class="article-tags">
									<div class="article-tag tag blue">HOT OFF THE PRESS</div>
								</div>
								<a href="#" class="artile-title heading-4">ELITE makes Inc. 5000 list 3 years running</a>
							</div>
							<div class="article-button">
								<a href="#" class="button small">Read article</a>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="js-black-ctn"></div>
		</section>


</div>
