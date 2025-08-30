import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { BookCard } from "@/components/sections/book-card";
import { PoetryQuote } from "@/components/sections/poetry-quote";

const books = [
  {
    title: "Forked Accents",
    description:
      "A bold and innovative collection that examines language, identity, and belonging in an increasingly connected world. Through vivid imagery and linguistic playfulness, this work explores the complexities of cultural identity, the immigrant experience, and the ways in which our accents carry the stories of our origins. The poems celebrate the beauty of linguistic diversity while acknowledging the challenges of existing between cultures.",
    publishYear: "2025",
    themes: [
      "Language & Identity",
      "Immigration",
      "Cultural Fusion",
      "Belonging",
      "Linguistic Heritage",
    ],
    purchaseLinks: [{ text: "Amazon", url: "https://a.co/d/5UcqcYy" }],
    reviews: [
      {
        text: "What makes Forked Accents compelling is not just its themes, but its literary craftsmanship. The author deliberately draws on African oral traditions—metaphor, repetition, rhetorical questions—not simply as style, but as a cultural affirmation",
        author: "The Vanguard",
      },
      {
        text: "This book is a breathtaking exploration of language, displacement, and selfhood. These poems don't just describe the immigrant experience—they embody it, with each line carrying the weight of hyphenated identities. The collection shines brightest in moments like 'My grandfather says, if you hold a chain for too long, it becomes a necklace'—where trauma transforms into heirloom. While the book could benefit from more cultural specifics, its universal themes of erasure and resilience resonate deeply",
        author: "Amazon Review",
      },
    ],
    excerpts: [
      {
        title:
          "How else would you know I am Nigerian if you never catch me praying?",
        content:
          "The ocean regurgitated me in the obodo- oyinbo, and I gulped every verse in Psalm 135. When the officer returned my passport, she shook her head as if I did not know that I had just become a sceptre contorted into a sickle, so I gulped a glass of Psalm 91. At King’s Cross, I learnt from the beehive that London was a lot like King Solomon, so I downed a glass of Psalm 25 because I did not want to become Solomon’s youngest concubine whose turn never reached to taste of the king’s gonads.While on the bus, the driver delivered a sermon about how the seatbelt owned 100 % of my life, so I gulped a glass of Psalm 23. As he made his way through the surgically thin roads, as the country sights wafted into my mind, I slowly sipped a bottle of Psalm 121. No sooner had I arrived at my new home, my oyinbo home, than I drank a thousand litres of Psalm 95. That night, I fell on my bed the same way Psalm 145 falls on a tired heart.",
      },
      {
        title: "Bandages",
        content:
          "My grandfather did to wounds what Achebe did to words. As soon as he heard that my Bini-flavoured-English had been punctured by shame, he placed an album of tongues in a medicine bag and dove into the ocean. After the officer stamped his passport, he shook the man’s hand because a handshake is an alternative way of telling another that you are not grovelling. When he arrived at my house, he sat me down, pulled out the album of tongues from his medicine bag, and made me gaze at it for the rest of my life. There was Aunty Okonjo’s tongue and the way its Igboness made the page shimmer like sapphire. Uncle Wole’s tongue and how its Yorubaness made the page shimmer like emerald. By the time we had flipped to the page where the Igbo in Aunty Chimamanda’s tongue glistened like rubies, I did not know when a tear dropped on my thighs. Now, if you were ever fortunate to meet my grandfather, this is what he would tell you, it was not a tear that dropped on his thighs; it was a chain!",
      },
      {
        title: "Touch",
        content:
          "But for grace, we all touch the world the same way we have been touched. If you’ve been touched roughly, you would touch others roughly. If you’ve been touched tenderly, you would touch others tenderly. If you’ve been touched kindly, you would touch others kindly. If you’ve been touched selfishly, you would touch others selfishly. If you’ve been touched compassionately, you would touch others compassionately. If you’ve been touched cynically, you would touch others cynically. If you’ve been touched lovingly, you would touch others lovingly.",
      },
      {
        title: "Bo-ul",
        content:
          "Let us place a wreath on the head of every Nigerian. On Iyekepolor and Chinyere. On Folake and Adamu. Let us massage the shoulders of their accents when their tongues hurt from the betrayal that happens whenever they caramelise tr into chr, so that trouser caramelises into chrouser, trust caramelises into chrust, trim caramelises into chrim, and try caramelises into chry. Who knows, one of these days, Iyekepolor, Chinyere, Folake and Adamu, would embrace the reality of how there is no difference between their tongue and Liam’s London tongue that cannot help caramelising bottle into bo-ul even if his life depended on it!",
      },
      {
        title: "Serendipity",
        content:
          "Every time I open the doors of my tongue and watch Bini run into the field, holding English’s hand, completely oblivious of the battle in my tongue, my eyes mist up. I watch the two of them, two little children quarrelling in one minute and tickling each other’s ribs in the next. I watch the two lads conjure a football out of thin air, kick it into the gaps between trees—homespun goalposts. I watch as Bini teaches English goalkeeping, and I watch as English teaches Bini how to dribble. I watch English wash Bini’s foot with water when he bruises it, and I watch Bini share his lunch with English, votively. Now, the truth is, I watch them from a distance and sob, tenderly, because no matter how hard I try, their serendipitous brotherhood would always remind me that English is that adopted child whom I must learn to love as much as the biological child if I want the battle in my tongue to cease.",
      },
    ],
  },
  {
    title: "Thirty Photographs of God",
    description:
      "A powerful narrative of cancer, demise, and the fragility of faith in the face of death's finality, Thirty Photographs of God grants readers an honest space to reverently confront the ageless debacle of how a good God allows his children suffer. It stretches beyond the conventionality of offering readers the famous light at the end of the tunnel but touches your heart in places where you've scarcely been touched, while guiding you graciously through the darkness of the tunnel in preparation for the light.",
    publishYear: "2024",
    themes: [
      "Spirituality",
      "Faith & Suffering",
      "Cancer & Loss",
      "Divine Mystery",
      "Human Resilience",
    ],
    purchaseLinks: [{ text: "Amazon", url: "https://a.co/d/6fTr2BF" }],
    reviews: [
      {
        text: "Breathtaking. This book talks about God as a mother, father, brother, lover, bestfriend. But then it also talks about how God would occasionally allow your heart break, and that's the part you wouldn't see coming while reading! I would recommend this book for everyone trying to make sense of God and the concept of human suffering. It is so masterful!",
        author: "Amazon Review",
      },
      {
        text: "I found this collection to be such a moving exploration of faith, pain, and resilience. Each poem invites you to sit with the uncomfortable reality of loss and suffering without rushing to offer easy answers. The writing feels super raw and intimate, like Osayande isn't afraid to grapple with the difficult question of why we experience suffering, even when faith is strong. Each poem reads like a quiet moment of reflection, bringing you closer to the emotional and spiritual turmoil of facing 'no' from God. It's a quick read but leaves a lasting impact",
        author: "Amazon Review",
      },
    ],
    excerpts: [
      {
        title: "The Photographs (I)",
        content:
          "You are water, and like all water, you would depend on thirst to be loved. Year after year, you would long to hear the mention of your name, Water, when people speak of their favourite drinks. But tell me, who craves for water when there is Moet? Year after year, you would secretly envy everyone who tastes like wine until God sneaks into your misery. And because God’s throat knows how to respect thirst, God would drink of you long after his thirst has been quenched and you would finally know that even ordinariness is beautiful.",
      },
      {
        title: "The Photographs (II)",
        content:
          "For your sake your God, who has never flicked a finger at a fly, he would force arsenic down the throat of fear, he would handcuff sorrow and make him a lifer, he would throw hurt into a hole of molten magma, he would push sadness down a cliff, he would invite anguish for a swim in a pool full of crocodiles. Your God would come back home with a sword clothed in blood on one hand, and the head of all your worries dangling in the other hand. You would see the red drip from where the sword met with the neck of despair and for the first me in your life the only fear you would ever have would be the fear of your God. So that when he goes into the bathroom to wash the sweat of battle from his body, you would dash into the bedroom and change the white sheets into something close to liquid passion. Red.",
      },
    ],
  },
];

export default function Books() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Published Works"
        subtitle="Collections that Capture the Nigerian Experience"
        description="Explore two groundbreaking poetry collections that examine identity, spirituality, and the complexities of contemporary African life."
        primaryAction={{
          text: "Read Excerpts",
          href: "#excerpts",
        }}
        secondaryAction={{
          text: "Purchase Books",
          href: "#purchase-links",
        }}
      />

      {/* Featured Quote */}
      <PoetryQuote
        quote="When my grandfather said 'you are a man so you will fall in love with precision', what he really meant to say was 'you are a man so you will fall in love with poetry'"
        author="Osadolor Osayande"
        className="bg-accent/5"
      />

      {/* Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Introduction */}
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-poetry">
                Two Journeys, One Voice
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From gospel themes to linguistic celebrations these collections
                represent different facets of our collective humanity. Each book
                offers a unique perspective on identity, authenticity,
                belonging, and the power of poetry to bridge cultural divides.
              </p>
            </div>

            {/* Book Cards */}
            {books.map((book, index) => (
              <div key={index} className="space-y-6">
                <BookCard
                  title={book.title}
                  description={book.description}
                  publishYear={book.publishYear}
                  themes={book.themes}
                  purchaseLinks={book.purchaseLinks}
                  reviews={book.reviews}
                  excerpts={book.excerpts}
                />
              </div>
            ))}

            {/* Reading Experience */}
            <div className="bg-muted/30 rounded-lg p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-poetry">
                  Experience Nigerian Poetry
                </h3>
                <p className="text-lg text-muted-foreground">
                  These collections invite readers into the rich, complex world
                  of contemporary Nigerian literature. Whether you&apos;re
                  familiar with African poetry or discovering it for the first
                  time, Osayande&apos;s work offers both accessibility and
                  depth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Poems Across Both Collections
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">5+</div>
                    <div className="text-sm text-muted-foreground">
                      Years of Critical Acclaim
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">Global</div>
                    <div className="text-sm text-muted-foreground">
                      International Recognition
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Works */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-poetry">
                What&apos;s Next
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Osadolor Osayande continues to write and explore new themes in
                his upcoming works. Stay connected to learn about future
                publications and poetry events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
