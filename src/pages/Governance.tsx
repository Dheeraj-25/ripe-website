import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Governance = () => {
  const teamMembers = {
    leadership: [
      {
        name: "B Ravindranath Reddi",
        position: "President",
        photo: "/assets/images/ravindra.png"
      },
      {
        name: "Kalavathi Ande",
        position: "Secretary",
        photo: "/assets/images/Kalavathi.jpg"
      },
      {
        name: "K Venkata Narayana",
        position: "Treasurer",
        photo: "/assets/images/narayana.png"
      }
    ],
    // members: [
    //   {
    //     name: "Board Member 1",
    //     position: "Board Member",
    //     photo: null
    //   },
    //   {
    //     name: "Board Member 2",
    //     position: "Board Member",
    //     photo: null
    //   },
    //   {
    //     name: "Board Member 3",
    //     position: "Board Member",
    //     photo: null
    //   },
    //   {
    //     name: "Board Member 4",
    //     position: "Board Member",
    //     photo: null
    //   }
    // ],
    DevelopmentTeam: [
      {
        name: "Hemanth",
        position: "Programme Manager",
        area: "Programme Implementation",
        photo: null
      },
      {
        name: "Dheeraj",
        position: "Development Consultant",
        area: "Technology & Development",
        photo: null
      },
      {
        name: "Likith Muni",
        position: "Gen AI consultant",
        area: "Technology & Development",
        photo: null
      },
      {
        name: "Varshini",
        position: "Resource Management Consultant",
        area: "Resource Management",
        photo: null
      },
      {
        name: "Chandra",
        position: "Village Coordinator",
        area: "Programme Implementation",
        photo: null
      },
      {
        name: "Anil Kumar",
        position: "Finance & Compliance Officer",
        area: "Finance & Administration",
        photo: null
      },
      {
        name: "Rahul",
        position: "Data Analytics Consultant",
        area: "Monitoring & Evaluation",
        photo: null
      },
      {
       name: "Priya",
        position: "Sustainability Coordinator",
        area: "Environment & Sustainability",
        photo: null
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Governance</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 animate-fade-in">
              Transparent leadership committed to accountability and effective rural development
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Governance Structure</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our organization operates under a robust governance framework that ensures transparency, accountability,
                and effective decision-making. The Board of Directors provides strategic guidance while the Executive
                Leadership implements programmes with integrity and excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We adhere to the highest standards of corporate governance, including regular audits, stakeholder
                consultations, and compliance with all regulatory requirements. Our governance practices ensure that
                resources are utilized efficiently to maximize impact in rural communities.
              </p>
            </div>

            {/* Board Structure */}
            <div className="mb-16">
              <div className="max-w-6xl mx-auto">
                {/* Leadership Row */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Leadership</h3>
                  <div className="flex flex-col md:flex-row justify-center gap-8">
                    {teamMembers.leadership.map((member, index) => (
                      <Card 
                        key={index}
                        className="text-center overflow-hidden opacity-0 translate-y-4 animate-[fade-in-up_0.6s_ease-out_forwards] motion-reduce:animate-none bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[1px] border border-white/5 hover:from-white/15 hover:to-white/5 transition-all duration-300 shadow-none w-full md:w-[300px]"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <CardHeader className="bg-transparent">
                          <div className="w-36 h-36 mx-auto mb-4 relative rounded-full overflow-hidden">
                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-[100%] h-[100%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted rounded-full flex items-center justify-center text-3xl font-bold text-primary">
                                {member.name.split(" ").map(n => n[0]).join("")}
                              </div>
                            )}
                          </div>
                          <CardTitle className="text-xl">{member.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-primary mb-2">{member.position}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Board Members Row - Commented out temporarily
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Board Members</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.members.map((member, index) => (
                      <Card 
                        key={index}
                        className="text-center overflow-hidden opacity-0 translate-y-4 animate-[fade-in-up_0.6s_ease-out_forwards] motion-reduce:animate-none bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[1px] border border-white/5 hover:from-white/15 hover:to-white/5 transition-all duration-300 shadow-none"
                        style={{ animationDelay: `${400 + index * 100}ms` }}
                      >
                        <CardHeader className="bg-transparent">
                          <div className="w-28 h-28 mx-auto mb-4 relative rounded-full overflow-hidden">
                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-[100%] h-[100%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                                {member.name.split(" ").map(n => n[0]).join("")}
                              </div>
                            )}
                          </div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-primary mb-2">{member.position}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                */}

                {/* Operations Team Section */}
                <div className="mt-20">
                  <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Operations Team</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {teamMembers.DevelopmentTeam.map((member, index) => (
                      <Card 
                        key={index}
                        className="text-center overflow-hidden opacity-0 translate-y-4 animate-[fade-in-up_0.6s_ease-out_forwards] motion-reduce:animate-none bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[1px] border border-white/5 hover:from-white/15 hover:to-white/5 transition-all duration-300 shadow-none"
                        style={{ animationDelay: `${800 + index * 100}ms` }}
                      >
                        <CardHeader className="bg-transparent">
                          <div className="w-28 h-28 mx-auto mb-4 relative rounded-full overflow-hidden">
                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-[100%] h-[100%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                                {member.name.split(" ").map(n => n[0]).join("")}
                              </div>
                            )}
                          </div>
                          <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-primary mb-1">{member.position}</p>
                          <p className="text-sm text-muted-foreground">{member.area}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Governance;