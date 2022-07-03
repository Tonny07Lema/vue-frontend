<template>
    <div class="container">
        <h1 class="text-center">Nota</h1>
        <table class="table table-striped">
            <thead>
                <th>Id</th>
                <th>Matematica</th>
                <th>Biologia</th>
                <th>Fisica</th>
                <th>Persona</th>
            </thead>
            <tbody>
                <tr v-for = "nota in nota" v-bind:key = "nota.id">
                    <td> {{nota.id}} </td>
                    <td> {{nota.matematica}} </td>
                    <td> {{nota.biologia}} </td>
                    <td> {{nota.fisica}} </td>
                    <td> {{nota.employee.nombre}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import NotaService from '../services/NotaService'

    export default {
        name: 'Nota' ,
        data() {
            return {
                nota : [] 
            }       
        },
        methods : {
            getNota(){
                NotaService.getNota().then((response) =>{
                    this.nota = response.data;
                });
            }
        },
        created(){
            this.getNota()
        }
    }
</script>
