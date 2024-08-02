import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  // Creating a user
  const user = await prisma.user.create({
    data: {
      institutionalEmail: 'nuse31sadas23@xxxXX.co',
      firstName: 'Juan',
      lastName: 'Perez',
      description: 'A student at the university',
      age: 20,
      phone: '1234567890',
      sex: 'Male',
      gender: 'Male',
      isActive: true,
    },
  });

  // Creating a Institution
  const institution = await prisma.institution.create({
    data: {
      name: 'Sudamericano',
      description: 'A tecnologic in Ecuador',
      type: 'SuperiorTechnologic',
    } });

    // Creating a career
    const career = await prisma.career.create({
      data: {
        name: 'Software Development',
        description: 'A career for software development',
        type: 'Engineering',
      },
    });

    // Creating user to institution
    await prisma.userInstitution.create({
      data: {
        userId: user.id,
        institutionId: institution.id,
      },
    });

    //creating user to career
    await prisma.userCareer.create({
      data: {
        userId: user.id,
        careerId: career.id,
      },
    });

    //creating institution to career
    await prisma.institutionCareer.create({
      data: {
        institutionId: institution.id,
        careerId: career.id,
      },
    });

    //creating permission
    const permission = await prisma.permission.create({
      data: {
        permissionName: 'create',
      },
    });
    
      // creating FocusScoreFormula
      const focusScoreFormula = await prisma.focusScoreFormula.create({
        data: {
        name: 'test',
        formula: 'a*2=3'
    }});

     // Creating a room
  const room = await prisma.room.create({
    data: {
      title: 'Software Development Basics',
      description: 'A room for beginner software development topics.',
      isActive: true,
      focusScoreFormulaId: focusScoreFormula.id,
      createdBy: user.id,
    },
  });

    //creating a role
    const teacherRole = await prisma.role.create({
      data: {
        roleName: 'Teacher',
      },
    });

    // Creating a topic
  const topic = await prisma.topic.create({
    data: {
      title: 'Introduction to Programming',
      roomId: room.id,
      description: 'Discuss the basics and advanced features of Prisma',
    },
  });

    //creating role to permission
    await prisma.rolePermission.create({
      data: {
        roleId: teacherRole.id,
        permissionId: permission.id,
      },
    });

    //creating user to role
    await prisma.userRole.create({
      data: {
        userId: user.id,
        roleId: teacherRole.id,
      },
    });


  //creating Room to role
    const roomRole = await prisma.roomRole.create({
        data: {
        roleName: "teacher",
        },
    });

  // Linking user to room
  await prisma.userRoom.create({
    data: {
      userId: user.id,
      roomId: room.id,
      roomRoleId: roomRole.id,
    },
  });

  // Linking user to topic
  await prisma.userTopic.create({
    data: {
      userId: user.id,
      topicId: topic.id,
    },
  });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
