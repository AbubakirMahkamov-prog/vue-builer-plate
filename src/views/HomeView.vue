<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Input } from "@/components/ui/input";


</script>

<template>
  <div class="p-4">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger class="text-xl">
          <Icon icon="material-symbols:menu" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Icon icon="ic:sharp-save" />
            <span class="ml-2">
              Saved messages
            </span>
          </MenubarItem>
          <MenubarItem>
            <Icon icon="bitcoin-icons:contacts-filled" />
            <span class="ml-2">
              Contacts
            </span>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Icon icon="material-symbols:settings" />
             <span class="ml-2">
              Settings
             </span>
            </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Icon icon="ph:plus-bold" />
            <span class="ml-2">
              Install app
            </span>
            </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <Input class="px-2 h-7" />
    </Menubar>
  </div>
</template>