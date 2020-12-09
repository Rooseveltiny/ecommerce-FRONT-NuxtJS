<template>
    <div class="catalog_item main_block_style main_block_style-less">
        <div class="catalog_item_inner">
            <Pic :images="product.files.images"/>
            <CatalogTitleDetails :product="product"/>
            <CatalogPriceAddButton :product="product"/>
        </div>
    </div>
</template>

<script>
import Pic from '@/components/Catalog/CatalogItem/CatalogItemPic'
import CatalogTitleDetails from '@/components/Catalog/CatalogItem/CatalogTitleDetails'
import CatalogPriceAddButton from '@/components/Catalog/CatalogItem/CatalogPriceAddButton'
export default {
    components: { Pic, CatalogTitleDetails, CatalogPriceAddButton },
    props: {
        product: Object
    }
}
</script>

<style scoped>
.catalog_item{
    width: 100%;
    height: 150px;
}
.catalog_item_inner{
    height: 100%;
    display: flex;
}

</style>