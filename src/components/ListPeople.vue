<template lang="html">
  <div class="">
    <input type="text" name="" value="" v-model=newPersonName>
    <button type="button" name="button" @click="createPerson">Create New Person</button>
    <table>
      <tr v-for="person in peopleList" :key="person.id">
        <td>{{ person.name }}</td>
        <td>
          <ul>
            <li v-for="interest in person.interests.items" :key="interest.id">{{ interest.interest.name }}</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { listPersons } from '../graphql/extraqueries'
import { createPerson } from '../graphql/mutations'
import { API, graphqlOperation } from "aws-amplify"

export default {
  data: () => {
    return {
      peopleList: [],
      newPersonName: ""
    }
  },
  async mounted() {
    let people = await API.graphql(graphqlOperation(listPersons))
    console.log(people)
    this.peopleList = people.data.listPersons.items
  },
  methods: {
    createPerson() {
      let input = {
        input: {
          name: this.newPersonName
        }
      }
      API.graphql(graphqlOperation(createPerson, input))
    }
  }
}
</script>

<style lang="css" scoped>
table {
  border: 1px solid #aaa;
}
td {
  border: 1px solid #aaa;
}
</style>
