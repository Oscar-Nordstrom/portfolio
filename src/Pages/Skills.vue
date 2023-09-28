<script setup lang="ts">

import Skill from "../components/Skill.vue";
import SearchBar from "../components/SearchBar.vue";
import {ISkill} from "../types.ts";
import {reactive} from "vue";
import {store} from "../../store.ts";
import Swapper from "../components/Swapper.vue";

const skills: ISkill[] = [
  {icon: "ViFileTypeCsharp2"            ,text: "C#"},
  {icon: "ViFileTypeCpp3"               ,text: "C++"},
  {icon: "ViFileTypeReactjs"            ,text: "React"},
  {icon: "ViFileTypeAngular"            ,text: "Angular"},
  {icon: "CoNextJs"                     ,text: "Next.js"},
  {icon: "ViFileTypeVue"                ,text: "Vue"},
  {icon: "ViFileTypeTypescriptOfficial" ,text: "Typescript"},
  {icon: "CoJavascript"                 ,text: "Javascript"},
  {icon: "CoDotNet"                     ,text: ".NET"},
  {icon: "ViFileTypeHtml"               ,text: "HTML"},
  {icon: "ViFileTypeCss"                ,text: "CSS"},
  {icon: "ViFileTypeTailwind"           ,text: "Tailwind CSS"},
  {icon: "ViFileTypeNode2"              ,text: "Node.js"},
  {icon: "ViFileTypeLua"                ,text: "Lua"},
  {icon: "RiTestTubeFill"               ,text: "xUnit"},
  {icon: "CoDotNet"                     ,text: "ASP.NET Web API"},
  {icon: "AiStackoverflowSquare"        ,text: "Fullstack Development"},
  {icon: "IoGameControllerSharp"        ,text: "Game Development"},
  {icon: "MdDataobjectTwotone"          ,text: "Object Oriented Programming"},
  {icon: "ViFileTypePlsql"              ,text: "SQL"},
  {icon: "ViFileTypePlsql"              ,text: "SQL Server"},
  {icon: "ViFileTypePlsql"              ,text: "SSMS"},
  {icon: "ViFileTypeAzure"              ,text: "Azure"},
  {icon: "BiKeyFill"                    ,text: "Keycloak"},
  {icon: "ViFileTypeDocker2"            ,text: "Docker"},
  {icon: "RiTeamFill"                   ,text: "Project Management"},
  {icon: "RiTeamFill"                   ,text: "Scrum"},
  {icon: "FcLinux"                      ,text: "Linux"},
  {icon: "GiArtificialIntelligence"     ,text: "Artificial Intelligence"},
  {icon: "RiTeamFill"                   ,text: "Project Management"},
  {icon: "CoUnity"                      ,text: "Unity"},
  {icon: "MdGames"                      ,text: "DirectX"},
  {icon: "ViFileTypeArduino"            ,text: "Arduino"},
  {icon: "BiGit"                        ,text: "Git"},
]
skills.sort((a,b)=>a.text.localeCompare(b.text));
let skillsToDisplay = reactive({skills});
function searchChange(text: string){
  skillsToDisplay.skills = skills.filter(e => e.text.toLowerCase().includes(text.toLowerCase()));
}

</script>

<template>
  <div class="flex justify-center w-[100wv] h-[88vh]">
    <div class="flex flex-col items-center gap-10 max-w-[90vw] max-h-[88vh]">
      <div class="flex flex-col items-center justify-between w-[90vw] md:w-[60vw] xl:w-[50vw]">
        <h1 class="text-[10vw] md:text-[7vw] lg:text-[5vw]">Skills</h1>
        <div class="flex gap-5">
          <SearchBar :on-change="searchChange"></SearchBar>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:flex-wrap gap-10 overflow-y-auto">
          <skill v-for="s in skillsToDisplay.skills" :icon="s.icon" :text="s.text"></skill>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>