# destination-malaysia

- Ensure `docker` is [installed](https://docs.docker.com/v17.09/engine/installation/#supported-platforms).
- Build the docker image: `docker build -t destination-malaysia .`
- Create and Start a docker container: 
    - `docker run -p 3000:3000 -v $PWD:/app -v node_modules:/app/node_modules -v .nuxt:/app/.nuxt --name destination-malaysia -dti destination-malaysia`
 > Start Coding!

# Resources:
## JS
- https://nuxtjs.org/guide
- https://vuejs.org/v2/guide/
- https://router.vuejs.org/guide/
- https://vuex.vuejs.org/guide/
- https://github.com/axios/axios
- https://tailwindcss.com/

## CSS
- https://tailwindcss.com/

## PWA

## Deployment
- https://pages.github.com/
- https://id.nuxtjs.org/faq/github-pages/ 
