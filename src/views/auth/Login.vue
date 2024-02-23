<script setup lang="ts">
import authService from "../../services/authService";
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  userName: z.string().min(2).max(50),
  password: z.string().min(2).max(6)
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  authService.login(values).then((res) => {
    localStorage.setItem('authTokens', JSON.stringify(res))
  });
})
</script>

<template>
  <div>
    <form class="space-y-2 w-1/3 pt-32 ml-auto mr-auto" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="userName">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Username" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Parol</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Parol" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full">
      Submit
    </Button>
  </form>
  </div>
 
</template>