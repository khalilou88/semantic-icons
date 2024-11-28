# Semantic Icons

npx nx generate @semantic-icons/nx-generators:heroicons
npx nx generate @semantic-icons/nx-generators:flag-icons
npx nx generate @semantic-icons/nx-generators:flowbite-icons
npx nx generate @semantic-icons/nx-generators:flag-icons
npx nx generate @semantic-icons/nx-generators:lucide-icons
npx nx generate @semantic-icons/nx-generators:circle-flags

nx generate @nx/plugin:generator libs/nx-generators/src/generators/flag-icons
nx g @nx/angular:library libs/flag-icons --publishable --import-path=@semantic-icons/flag-icons
nx g @nx/angular:library-secondary-entry-point --library=flag-icons --name=square
nx g @nx/angular:library-secondary-entry-point --library=flag-icons --name=rectangle

nx generate @nx/plugin:generator libs/nx-generators/src/generators/lucide-icons
nx g @nx/angular:library libs/lucide-icons --publishable --import-path=@semantic-icons/lucide-icons

nx generate @nx/plugin:generator libs/nx-generators/src/generators/circle-flags
nx g @nx/angular:library libs/circle-flags --publishable --import-path=@semantic-icons/circle-flags
nx g @nx/angular:library-secondary-entry-point --library=circle-flags --name=other
