import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const NEXT_AUTH = {

    providers: [
        // CredentialsProvider({
        //     name: "Email",
        //     credentials: {
        //         username: { label: 'Email', type: 'text', placeholder: 'Email' },
        //         password: { label: 'password', type: 'password', placeholder: 'Password' },
        //     },
        //     async authorize(credentials: any) {
        //         console.log(credentials);

        //         return {
        //             id: "user1",
        //             name: "Mohmmed Aariz",
        //             email: "aariz@gmail.com"
        //         };
        //     },
        // }),

        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID || "",
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        // }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     jwt: ({token, user}: any) => {
    //         console.log("token is: ");
    //         console.log(token);
    //         // token.userId = token.sub;

    //         return token;
    //     },
    //     session: ({session, token, user}: any) => {
    //         if (session && session.user) {
    //             console.log("Session is: " );
    //             console.log(session);
    //             session.user.id = token.sub; // token.sub
    //         }
    //         return session;
    //     }
    // },
    // pages: {
    //     signIn: "/signin"
    // }
}