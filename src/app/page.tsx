import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default async function Home() {
  const data = await getServerSession(authOptions);
  console.log(data);

  return (
    <div className="p-10 space-y-6">
      <Card className="max-w-md mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Welcome to Our Site</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            officiis eum eaque obcaecati facilis earum cumque quaerat, assumenda,
            veritatis asperiores cupiditate possimus sint omnis expedita modi aut
            fuga nihil ab?
          </p>
        </CardContent>
      </Card>

      {data ? (
        <Alert variant="success">
          <AlertTitle>Welcome Back!</AlertTitle>
          <AlertDescription>
            You are logged in as {data.user?.email}.
          </AlertDescription>
        </Alert>
      ) : (
        <Alert variant="error">
          <AlertTitle>Not Logged In</AlertTitle>
          <AlertDescription>
            You are not logged in. Please login to access more features.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex justify-center">
        {data ? (
          <Button variant="outline">Go to Profile</Button>
        ) : (
          <Button>Login Now</Button>
        )}
      </div>
    </div>
  );
}
