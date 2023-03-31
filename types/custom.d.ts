// custom.d.ts
import 'react-dom'

declare module 'react-dom' {
    interface Root {
        render( element: React.ReactNode ): void
        unmount(): void
    }

    function hydrateRoot(
        container: Element | Document | DocumentFragment | Comment
    ): Root
}

declare module '*.tsx' {
    const content: any
    export default content
}
