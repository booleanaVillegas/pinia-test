import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, vitest } from "vitest";
import { useAuthenticationStore } from "./authentication";

describe("Auth Store", () => {
    vi.mock("firebase/auth", () => {
        const signInWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const createUserWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const signOut = vitest.fn(() => Promise.resolve(undefined));

        return {
            signInWithEmailAndPassword,
            createUserWithEmailAndPassword,
            signOut,
        };
    });

    vi.mock("../firebase/config", () => ({ auth: "mock" }))

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("new user await fn", async() => {
        const authentication = useAuthenticationStore();

        console.log = vitest.fn()

        await authentication.newUserAwait('email', 'pass')
    

        expect(console.log).toHaveBeenCalledWith('usuario creado', '1234');
    });

    it("User is null", () => {
        const authentication = useAuthenticationStore();

        expect(authentication.user).toBeNull();
    });

    /*  test('that the counter increments by 1', () => {
            const progress = useProgressStore()

            progress.increment()

            expect(progress.counter).toBe(1)
        })

        test('that the percentage is returned', () => {
            const progress = useProgressStore()
            progress.$patch({
                max: 10,
                counter: 5
            })

            expect(progress.percentage).toBe(50)
        })*/
});