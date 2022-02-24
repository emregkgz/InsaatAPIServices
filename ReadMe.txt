npm install dotenv

.env isimli default bir dosya içinden environment veriables yani çevresel  değişkenleri  ve artı olarak kendi belirleyeceğimiz
ek hassas veriileri saklamaya yarar 


.env uzantılı dosyayı  oluşturur ve içine birdeneme key= value yazalım 

örneğin index.js içine  require ('dotenv').config() yazalım ve .env dosyasını okuyabilir hale getirelim 

console.log(proccess.env) yazıp sonucu alalım