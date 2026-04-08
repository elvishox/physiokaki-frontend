# Crear archivo de tipos para Next.js
New-Item -Path next-env.d.ts -ItemType File -Value "/// <reference types='next' />
/// <reference types='next/image-types/global' />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information."