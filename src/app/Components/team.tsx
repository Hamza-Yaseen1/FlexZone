/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { client } from '@/sanity/lib/client';

// Define TypeScript types for team member data
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    client.fetch(
        `*[_type == "team"]{
          name,
          role,
          "imageUrl": image.asset->url
        }`
      )
      .then((data: TeamMember[]) => setTeamMembers(data))
      .catch(console.error);
  }, []);

  return (
    <div className="team items-center">
      <h1 className="text-3xl p-5 font-bold text-center">Our Team</h1>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            hoverable
            style={{ width: '100%' }}
            cover={<img alt={member.name} src={member.imageUrl} />}
          >
            <Meta title={member.name} description={member.role} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Team;
