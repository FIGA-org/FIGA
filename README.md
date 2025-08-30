# FIGA

Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Comenzando


Primero, ejecuta el servidor de desarrollo:


```bash
npm install
npm run dev
```


Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.


Para desarrollo:
- Cambia a la rama develop
- Haz pull de la última versión de develop
- Ejecuta git checkout -b FIGA-XXX-nombre-de-la-feature
- Haz commit y push
- Crea un PR contra develop
- Haz merge a master
- Vercel debería desplegar automáticamente

- Para hacer el deploy en Vercel:

Las siguientes variables deben ser establecidas antes de continuar con el deploy en Vercel

NEXT_PUBLIC_STRIPE_BUTTON_ID={secreto}
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY={secreto}
NEXT_PUBLIC_PAYPAL_CLIENT_ID={secreto}