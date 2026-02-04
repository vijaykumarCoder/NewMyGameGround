export interface Game {
  id: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  gameUrl: string;
}

export const gamesData: Game[] = [
  {
    id: '1',
    category: 'Action',
    title: 'Liquid Sort - Tube Puzzle Game',
    description: `
    <i>Water Color Sort has a calm, easygoing theme that makes it perfect for players of all ages. There are no timers, no pressure—just you, the colors, and your strategy.</i><br />
    <br />Water Color Sort is a relaxing yet brain-teasing puzzle game where your goal is to sort colored water into separate test tubes. Each tube should end up holding only one color, and every color must be fully separated. It sounds simple—but as levels progress, it becomes surprisingly tricky!

    This game is designed to challenge your logic, patience, and planning skills while keeping the experience calm and enjoyable.<br />
    
    <br /><b>🧪 How to Play Water Color Sort:</b>
    <br />1.You start with several test tubes filled with different colored water.
    <br />2.Each tube can hold only one color when fully sorted.
    <br />3.Click or tap on a test tube to select it.
    <br />4.Click or tap another tube to pour water into it.
    <br />5.You can only pour water:
    <br />Into an empty tube, or
    <br />On top of the same color
    <br />6.Keep pouring and rearranging until:
    <br />Each tube contains only one color
    <br />7.Try to complete the level using as few moves as possible to earn higher star ratings ⭐
    <br />
    <br /><b>😂 Why is it fun?</b>

    <br />-Watching colors flow smoothly from one tube to another is oddly satisfying
    <br />-Easy to learn, but hard to master
    <br />-Feels relaxing, yet secretly makes your brain work
    <br />-Perfect for short breaks or long puzzle sessions
    <br />-That “aha!” moment when everything finally lines up is priceless 😄
    <br />
    <br /><b>🧠 How does it help your brain?</b>
    <br />-Improves logical thinking
    <br />-Boosts problem-solving skills
    <br />-Trains focus and planning
    <br />-Encourages thinking ahead to minimize moves
    <br />-It’s a great mix of fun and mental exercise without feeling stressful.`,
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fliquid-sort%2Ffeatured_img%2Ffeatured_img-1724136427719.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/liquid-sort',
  },
  {
    id: '2',
    category: 'Action',
    title: 'Bubble Shooter - Pop Blast',
    description: `
    <i>Bubble Pop Mania offers a colorful, energetic, and addictive gameplay experience. It’s easy to start, but challenging enough to keep you hooked as you chase higher scores.</i><br />
    <br />🎮<b> What is the game about?</b>
    <br />Bubble Pop Mania is an exciting and fast-paced color-matching puzzle game where your mission is to pop as many bubbles as possible before time runs out. The screen is filled with colorful bubbles, and only smart moves and quick thinking will help you score big!
    <br />This game combines strategy, speed, and sharp observation, making every second count.<br />
    <br />💥<b>How to Play Bubble Pop Mania</b>
    <br />1.The screen is filled with bubbles of different colors.
    <br />2.Click or tap on two or more matching bubbles to pop them.
    <br />3.Single bubbles cannot be popped, so plan your moves carefully.
    <br />4.Try to:
    <br /> - Group same-colored bubbles together
    <br /> - Clear large clusters for higher scores
    <br />5.Pop bubbles that contain clock icons to gain extra time ⏰.
    <br />6.Make diamonds fall to the bottom of the screen to earn bonus points.
    <br />7.Keep popping until the timer runs out—and aim for the highest score possible!<br />
    <br />😂 <b>Why is it fun?</b>
    <br />-Popping bubbles is super satisfying
    <br />-Bright colors and smooth animations keep the energy high
    <br />-Every move feels rewarding
    <br />-Racing against the clock adds thrilling pressure
    <br />-One more pop always turns into “just one more game” 😄
    <br /><br />🧠 <b>How does it challenge your brain?</b>
    <br />-Encourages quick decision-making
    <br />-Improves pattern recognition
    <br />-Trains strategic thinking under pressure
    <br />-Enhances hand–eye coordination
    <br />-It’s fun on the surface, but your brain is working hard behind the scenes!`,
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fbubble-shooter%2Ffeatured_img%2Ffeatured_img-1723624280706.jpg&w=640&q=100',
    gameUrl: 'https://www.punogames.com/games/bubble-shooter',
  },
  {
    id: '3',
    category: 'Action',
    title: 'Carnival Ducks - Shooting Game',
    description: 'Challenge your mind with hundreds of brain-teasing puzzles. From simple jigsaws to complex logic puzzles, test your problem-solving skills.',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fcarnival-ducks%2Ffeatured_img%2Ffeatured_img-1724226031798.jpg&w=640&q=75',
    gameUrl: 'src="https://www.punogames.com/games/carnival-ducks"',
  },
  {
    id: '4',
    category: 'Action',
    title: 'Line Dot Puzzle Game',
    description: 'Fight for survival in a post-apocalyptic world overrun by zombies. Gather resources, build defenses, and survive the undead hordes.',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lcJ_OcP6Jgr0XV-enaHT5fTOx_Vuo5fIFQ&s',
    gameUrl: 'https://api.eternalgames.io/games/f6db2adf-baf4-40d1-8f5e-51379ee5c40b/LineDot_webGL_1/index.html',
  },
  {
    id: '5',
    category: 'Action',
    title: 'ColorBump - Addictive Color Matching Game',
    description: 'Enter a magical realm filled with dragons, wizards, and ancient treasures. Complete quests, level up your character, and save the kingdom.',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fcolor-bump%2Ffeatured_img%2Ffeatured_img-1724226064115.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/color-bump',
  },
  {
    id: '6',
    category: 'Action',
    title: 'Pool 8 Ball - Ultimate Online Billiards Game',
    description: 'Compete in various sports including football, basketball, and tennis. Master different game modes and become a sports champion.',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fpool-8-ball%2Ffeatured_img%2Ffeatured_img-1723894000837.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/pool-8-ball',
  },
  {
    id: '7',
    category: 'Action',
    title: 'Ball Blaster - Jumping Ball Blast',
    description: 'No need to worry anymore! Bubble/Ball Blaster will transport you to a world where you can chase away all your everyday stresses by simply enjoying a game. Thats right! By engaging in this fun and straightforward game, you can momentarily escape from all your concerns. The gameplay is incredibly easy and entertaining, ensuring you’ll enjoy every moment. Your task is to fire at number blocks with a cannon and bring their values down to zero. When you shoot small number blocks, they disappear, while the larger blocks may split into smaller ones, adding to the excitement and challenge for players. In contrast to other gaming apps, this game does not take up any storage space on your mobile device, laptop, or PC. This feature is one of the most sought-after aspects of a game. It provides simple and enjoyable gameplay. So what’s holding you back? Accept the challenge and see how far you can go in your shooting!',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fball-blaster%2Ffeatured_img%2Ffeatured_img-1723624786832.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/ball-blaster',
  },
  {
    id: '8',
    category: 'Action',
    title: 'ColorUp - Addictive Ball-Brick Arcade Game',
    description: 'Colorup may not appear as a groundbreaking or innovative title, but it certainly offers an enjoyable experience. It is a traditional ball-brick game, reminiscent of something you might have played on older Windows PCs. However, this latest rendition, called Colorup, introduces a few unique elements. In this game, you take on the role of a ball, aiming to ascend with each move. To elevate your position, you simply need to leap onto the colored bricks. The catch is that you must only land on bricks that match the color of your ball. If you accidentally jump on a brick of a different color, you will face a setback. There’s no need to aim for specific angles to propel the ball; a simple swipe towards the right colored brick will suffice. This straightforward approach effectively tests a players logical thinking and adaptability as they navigate various color bricks. If you’re on the lookout for an arcade game that pushes you to reach your full potential, Colorup is not to be overlooked. While it may seem simple at first glance, you will soon realize that progressing far is quite a challenge. Engaging with this game demands quick decision-making skills. Your goal is to swipe the screen left or right to land on the appropriate color brick. As you continue to do this',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fcolorup%2Ffeatured_img%2Ffeatured_img-1723626256262.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/colorup',
  },
  {
    id: '9',
    category: 'Action',
    title: 'Mergis Game - Merge and Match for High Scores',
    description: 'Colorup may not appear as a groundbreaking or innovative title, but it certainly offers an enjoyable experience. It is a traditional ball-brick game, reminiscent of something you might have played on older Windows PCs. However, this latest rendition, called Colorup, introduces a few unique elements. In this game, you take on the role of a ball, aiming to ascend with each move. To elevate your position, you simply need to leap onto the colored bricks. The catch is that you must only land on bricks that match the color of your ball. If you accidentally jump on a brick of a different color, you will face a setback. There’s no need to aim for specific angles to propel the ball; a simple swipe towards the right colored brick will suffice. This straightforward approach effectively tests a players logical thinking and adaptability as they navigate various color bricks. If you’re on the lookout for an arcade game that pushes you to reach your full potential, Colorup is not to be overlooked. While it may seem simple at first glance, you will soon realize that progressing far is quite a challenge. Engaging with this game demands quick decision-making skills. Your goal is to swipe the screen left or right to land on the appropriate color brick. As you continue to do this',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fmergis%2Ffeatured_img%2Ffeatured_img-1723626920793.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/mergis',
  },
  {
    id: '10',
    category: 'Action',
    title: 'Mergis Game - Merge and Match for High Scores',
    description: 'Colorup may not appear as a groundbreaking or innovative title, but it certainly offers an enjoyable experience. It is a traditional ball-brick game, reminiscent of something you might have played on older Windows PCs. However, this latest rendition, called Colorup, introduces a few unique elements. In this game, you take on the role of a ball, aiming to ascend with each move. To elevate your position, you simply need to leap onto the colored bricks. The catch is that you must only land on bricks that match the color of your ball. If you accidentally jump on a brick of a different color, you will face a setback. There’s no need to aim for specific angles to propel the ball; a simple swipe towards the right colored brick will suffice. This straightforward approach effectively tests a players logical thinking and adaptability as they navigate various color bricks. If you’re on the lookout for an arcade game that pushes you to reach your full potential, Colorup is not to be overlooked. While it may seem simple at first glance, you will soon realize that progressing far is quite a challenge. Engaging with this game demands quick decision-making skills. Your goal is to swipe the screen left or right to land on the appropriate color brick. As you continue to do this',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Finfinite-jumper%2Ffeatured_img%2Ffeatured_img-1724226715198.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/infinite-jumper',
  },
  {
    id: '11',
    category: 'Action',
    title: 'Happy Cups - Fun Water Sorting Game',
    description: 'Colorup may not appear as a groundbreaking or innovative title, but it certainly offers an enjoyable experience. It is a traditional ball-brick game, reminiscent of something you might have played on older Windows PCs. However, this latest rendition, called Colorup, introduces a few unique elements. In this game, you take on the role of a ball, aiming to ascend with each move. To elevate your position, you simply need to leap onto the colored bricks. The catch is that you must only land on bricks that match the color of your ball. If you accidentally jump on a brick of a different color, you will face a setback. There’s no need to aim for specific angles to propel the ball; a simple swipe towards the right colored brick will suffice. This straightforward approach effectively tests a players logical thinking and adaptability as they navigate various color bricks. If you’re on the lookout for an arcade game that pushes you to reach your full potential, Colorup is not to be overlooked. While it may seem simple at first glance, you will soon realize that progressing far is quite a challenge. Engaging with this game demands quick decision-making skills. Your goal is to swipe the screen left or right to land on the appropriate color brick. As you continue to do this',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Fhappy-cups%2Ffeatured_img%2Ffeatured_img-1724227478865.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/happy-cups',
  },
  {
    id: '12',
    category: 'Action',
    title: 'Play Fighter Jet - Ultimate Air Combat Game',
    description: 'Colorup may not appear as a groundbreaking or innovative title, but it certainly offers an enjoyable experience. It is a traditional ball-brick game, reminiscent of something you might have played on older Windows PCs. However, this latest rendition, called Colorup, introduces a few unique elements. In this game, you take on the role of a ball, aiming to ascend with each move. To elevate your position, you simply need to leap onto the colored bricks. The catch is that you must only land on bricks that match the color of your ball. If you accidentally jump on a brick of a different color, you will face a setback. There’s no need to aim for specific angles to propel the ball; a simple swipe towards the right colored brick will suffice. This straightforward approach effectively tests a players logical thinking and adaptability as they navigate various color bricks. If you’re on the lookout for an arcade game that pushes you to reach your full potential, Colorup is not to be overlooked. While it may seem simple at first glance, you will soon realize that progressing far is quite a challenge. Engaging with this game demands quick decision-making skills. Your goal is to swipe the screen left or right to land on the appropriate color brick. As you continue to do this',
    thumbnail: 'https://www.punogames.com/_next/image?url=https%3A%2F%2Fwww.punogames.com%2Fassets%2Ffighter-jet%2Ffeatured_img%2Ffeatured_img-1724227103888.jpg&w=640&q=75',
    gameUrl: 'https://www.punogames.com/games/fighter-jet'
  }
];
