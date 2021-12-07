var app = new Vue({
    el: '#app',
    data: {
        Enviardatos:{
          titulo:null,
          descripcion:null
        },
        Recivirdatos:{

        },
        //interructor para saber si envio o edito los datos
        swich:false,
       
        // id de una tarea a editar
        unico_id: ' ',
    },
    created: function () {
      //para pintar lo datos al iniciar  la app vue
      this.get();
    },
    methods:{
      //enviar datos al server con el metodo post y put
        send() {
            if(this.swich === false){
              fetch('/API',{
                method:'POST',
                body: JSON.stringify(this.Enviardatos),
                headers: {
                  'Accept':'application/json' ,
                  'Content-type':'application/json'
                },
              })
            .then(res => res.json())
            .then(data => { this.get(),console.log(data)});
            } else {
              fetch('/API/' + this.unico_id,
              {
                method: 'PUT',
                body: JSON.stringify(this.Enviardatos),
                headers: {
                  'Accept':'application/json' ,
                  'Content-type':'application/json'
                },
              })
              .then(res => res.json())
              .then(data => { this.get(),console.log(data)});
              this.swich = false;
            }
      
          this.cleand();
       
      },
      //limpiar el form luego del envio
      cleand(){
      this.Enviardatos.titulo= '',
      this.Enviardatos.descripcion= ' '
      },
      //obtener los datos enviados anteriormente
      get(){
        fetch('/API')
        .then(res => res.json())
        .then(data => {this.Recivirdatos = data});
      },
      //borrar los datos 
      Delete(id){
        fetch('/API/'+id,{
          method:'DELETE',
          headers: {
            'Accept':'application/json' ,
            'Content-type':'application/json'
          },
        })
      .then(res => res.json())
      .then(data => { this.get(),console.log(data)});
      },
      //actualizar los datos
      Update(id){
        fetch('/API/' + id)
        .then(res => res.json())
        .then(data => { 
          this.Enviardatos.titulo = data.titulo,
          this.Enviardatos.descripcion =  data.descripcion, 
          this.unico_id = data._id});
          this.swich = true;
      }
    }
  })

 