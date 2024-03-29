import { signOutAcc } from "@/action/signout";
import { auth } from "@/auth";

const Profile = async () => {

    const session = await auth();

    return (
        <>
            {session?.user && (
                <h1>{JSON.stringify(session)}</h1>
            )}
        </>
    );
};

export default Profile;