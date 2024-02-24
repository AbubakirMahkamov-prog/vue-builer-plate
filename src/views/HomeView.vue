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
import { MagnifyingGlassIcon } from '@radix-icons/vue'


</script>

<template>
  <div class="p-4 gap-2 flex">
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
     
    </Menubar>
    <div class="relative w-full items-center">
        <Input id="search" type="text" placeholder="Search..." class="p-0 pl-10 w-full" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
        </span>
      </div>
  </div>
</template>