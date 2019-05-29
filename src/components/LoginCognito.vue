<template lang="html">
  <Authenticator :authConfig="authConfig"/>
</template>

<script>
import { components } from 'aws-amplify-vue'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { router } from '../router'

export default {
  components: {
    ...components
  },
  data: () => {
    return {
      authConfig: {
            signUpConfig: {
                header: 'Sign up for an account',
                hiddenDefaults: ['phone_number', 'email'],
                signUpFields: [
                    {
                        label: 'Password',
                        key: 'password',
                        type: 'password',
                        required: true,
                        displayOrder: 1
                    }
                ]
            },
            confirmSignUpConfig: {
                header: 'Please enter the code sent to your email'
            },
        }
    }
  },
  created() {
    AmplifyEventBus.$on('authState', () => {
      router.replace({name: 'home'})
    })
  }
}
</script>

<style lang="css" scoped>
</style>
