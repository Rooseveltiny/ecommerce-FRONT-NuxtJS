<template>
  
    <div class="company_founded">
          <div
            class="company_found_content big_title title_center"
          >
            Компания
            <span class="underline_with_main_color">Всё для кровли</span> была
            основана в 2005 году.
            <div class="company_found_list">
              <div class="company_founded_logo"></div>
              <client-only>
              <div class="company_found_list_content">
              <vue-typer
              class="typer_found"
                text="Обширный перечень строительных материалов!"
                :repeat="0"
              ></vue-typer>
              <vue-typer
              class="typer_found"
                text="Постоянное развитие технологических процессов!"
                :repeat="0"
              ></vue-typer>
              <vue-typer
              class="typer_found"
                text="Освоение цифровых сервисов для удобства клиентов!"
                :repeat="0"
              ></vue-typer>
              </div>
              </client-only>
            </div>
          </div>
        </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.company_founded {
  display: flex;
  width: 100%;
}

.company_found_content {
  width: 100%;
}

.company_founded_logo {
  background-image: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/logos/logo_about_company.png);
  height: 300px;
  width: 300px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  margin: 0 0 0 60px;
}

.company_found_list{
    display: flex;
    align-items: center;
    font-size: 20px;
}

.company_found_list_content{
    margin-left: 40px;
    display: grid;
    text-align: left;
}

.typer_found{
    margin: 15px 0;
}

/* addoptation */

@media (max-width: 990px){
  .typer_found{
    font-size: 17px;
  }
}

@media (max-width: 770px){
  .typer_found{
    font-size: 12px;
  }
  .company_founded_logo{
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 575px){
 
  .company_found_list_content{
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0 0 0;
  }

  .company_found_list{
        display: flex;
    flex-flow: column;
    flex-direction: column-reverse;
  }
  .company_founded_logo{
      margin: 0;
      width: 150px;
      height: 150px;
    }

  .typer_found{
    margin: 10px 0;
}

}


</style>
