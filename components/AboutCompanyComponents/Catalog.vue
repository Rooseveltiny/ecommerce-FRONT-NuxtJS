<template>
  <div class="catalog_main">
    <div class="section_type_one">
      <div class="big_title title_center">Каталог продукции.</div>
    </div>
    <div class="catalog">
        <div class="catalog_icon"></div>
        <div class="catalog_content">
            <div class="catalog_title">Полный перечень продукции на нашем сайте.</div>
            <div class="catalog_text">В каталоге присутствует удобный фильтр, сортировка, а также
                разбиение продукции по категориям.
            </div>
            <div class="catalog_items">
                <div class="catalog_item">Реальные остатки</div>
                <div class="catalog_item">Актуальные цены</div>
                <div class="catalog_item">Полный каталог</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.catalog{
    display: flex;
    height: 300px;
    align-items: center;
    margin-top: 30px;
}

.catalog_icon{
    width: 45%;
    background-image: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/icons/catalog.svg);
    height: 100%;
    background-position: center center;
    background-size: 60%;
    background-repeat: no-repeat;
}


.catalog_content{
    width: 50%;
}

.catalog_text{
    color: #666;
}

.catalog_title{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.catalog_items{
    display: flex;
    width: 100%;
    margin-top: 15px;
}

.catalog_item{
    padding: 5px 10px;
    margin: 0 10px;
    background: #fce373;
    transition-duration: .5s;
}
.catalog_item:hover{
    transform: scale(1.05);
}
.catalog_item:first-child{
    margin-left: 0;
}

@media (max-width: 770px){
    
    .catalog_title{
        font-size: 17px;
    }

    .catalog_text{
        font-size: 15px;
    }

    .catalog_items{
        flex-direction: column;
    }

    .catalog_item{
    margin: 7px 0;
    }

    .catalog_icon{
        background-size: 70%;
    }

}
@media (max-width: 575px){

    .catalog_icon{
        display: none;
    }

    .catalog_content{
        width: 100%;
    }

    .catalog_title{
        font-size: 15px;
    }
    .catalog_text{
        font-size: 13px;
    }
    .catalog{
        margin-top: 10px;
    }

}


</style>