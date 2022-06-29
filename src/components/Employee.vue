<template>
    <div class="container">
        <h1 class="text-center">Lista</h1>
        <table class="table table-striped">
            <thead>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
            </thead>
            <tbody>
                <tr v-for = "employee in employees" v-bind:key = "employee.id">
                    <td> {{employee.id}} </td>
                    <td> {{employee.nombre}} </td>
                    <td> {{employee.apellido}} </td>
                    <td> {{employee.correo}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import EmployeeService from '../services/EmployeeService'

    export default {
        name: 'Employees' ,
        data() {
            return {
                employees : [] 
            }       
        },
        methods : {
            getEmployees(){
                EmployeeService.getEmployees().then((response) =>{
                    this.employees = response.data;
                });
            }
        },
        created(){
            this.getEmployees()
        }
    }
</script>


