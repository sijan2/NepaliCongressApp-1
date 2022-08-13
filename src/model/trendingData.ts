/* This code is creating an array of objects. Each object has a key and a value. The key is the
name of the property and the value is the value of the property. */
import DateAndDayGenerator from '@utils/DayGen';

const date = new Date();
const dateAndDay = DateAndDayGenerator(date);
export const trendingNews = [
  {
    id: 39,
    image: require('../assets/images/sbdeuba.jpeg'),
    for: 'Sher Bd. Deuba',
    title: 'Deuba sworn in as Nepal’s Prime Minister for 5th time',
    name: 'Kathmandu Post',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tSher Bahadur Deuba took oath as the Prime Minister of Nepal on Tuesday, a day after the country’s Supreme Court overturned the dissolution of the House of Representatives and said that Deuba must be appointed PM.
    \nPresident Bidya Devi Bhandari administered the oath of office to Deuba at a ceremony held at her office on Tuesday evening. Deuba, 75, president of the Nepali Congress, was sworn in as Prime Minister for the fifth time.
    \nHowever, the swearing in ceremony was delayed by hours due to a dispute between Deuba and the President’s office regarding the content of the letter of appointment.
    \n“The President has appointed Sher Bahadur Deuba as the Prime Minister as per the verdict of the Supreme court yesterday (Monday),” a statement issued by President Bhandari’s office had initially said. But Bhandari was later forced issue another letter in which the relevant article of the Constitution under which the appointment was being made was mentioned. The second letter came after Deuba insisted he would not take the oath of office without the change being made in the initial letter.`,
  },
  {
    id: 40,
    image: require('../assets/images/sb.jpeg'),

    title: 'Deuba seeks stimulus package for media',
    for: 'Sher Bd. Deuba',
    name: 'Himalayan Times',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tNepali Congress President Sher Bahadur Deuba today urged the government to announce special relief package for media houses and journalists.
      \nStating that the Nepali media sector was reeling under acute financial crisis in the wake of the COVId-19 pandemic, he underscored the urgent need for the government to come up with an economic stimulus package.
      \n“The COVId-19 pandemic has not only resulted in zero revenue collection for media houses but also rendered some journalists jobless. Therefore, relief is needed from the government to overcome the adverse situation created by the novel coronavirus,” Deuba said in a press release issued on the occasion of World Press Freedom day.
      \nDeuba lauded the role played by the Nepali media during trying times. “Press freedom is at risk of being further undermined on the pretext of the fight against COVId-19. Recent actions of the government hint at this possibility. Any attempt to curtail press freedom will not be acceptable to the NC,” he warned.`,
  },
  {
    id: 41,
    image: require('../assets/images/sb1.jpeg'),
    title: 'Setback for KP Oli as SC directs president to appoint Deuba as PM',
    name: 'Online Khabar',
    for: 'Sher Bd. Deuba',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tThe Supreme Court of Nepal on Monday restored the dissolved House of Representatives and ordered President Bidya Devi Bhandari to appoint Nepali Congress chief Sher Bahadur Deuba as the country’s prime minister by Tuesday, The Kathmandu Post reported. Deuba will have to win a vote of confidence within a month of his appointment.
    \nThis the second time in five months that the court has reinstated the House. It had taken a similar action in February as well.
    \nBhandari had dissolved the Parliament on May 21 and ordered fresh elections in six months. The decision was based on the recommendations of caretaker Prime Minister KP Oli’s Cabinet. Neither Oli nor the Opposition have been able to demonstrate a majority to form a new government in Nepal.
    \nOn Monday, a constitutional bench led by Chief Justice Cholendra Shumsher Rana said Bhandari’s decision was unconstitutional, according to PTI.
    \nThe Supreme Court also ordered that a new session of the House of Representatives be called on July 18. The verdict came as a setback for Oli, who had been preparing for snap elections to be held in November.
    
    `,
  },
  {
    id: 42,
    image: require('../assets/images/ramchandra.jpeg'),
    title: 'Ram Chandra Poudel to receive Japanese honours',
    name: 'Kathmandu Post',
    for: 'Ramchandra Poudel',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tThe government of Japan has decided to confer the Grand Cordon of the Order of the Rising Sun on senior Nepali Congress leader Ram Chandra Poudel, recognising his contribution in strengthening Nepal-Japan ties.
    \nThe announcement was made in Tokyo on Wednesday, according to the Embassy of Japan in Kathmandu.
    \n“The Government of Japan announced the foreign recipients of the 2020 Spring Imperial Decorations. Former Speaker of the House of Representatives of Nepal, Ram Chandra Poudel, is among this year’s foreign recipients,” said the embassy in a statement. “In recognition of his contributions towards strengthening the relationship between Japan and Nepal, he will receive the Grand Cordon of the Order of the Rising Sun.”
    \nAccording to the embassy, Poudel contributed to the activation of contacts between parliamentarians of the two countries and established the Japan Nepal Friendship Parliamentarian League in 1999 when he was the Speaker of the House of Representatives of Nepal.
    \nPoudel was the chairman of the League from the beginning until 2017.
    \n“He was also actively involved in the promotion of bilateral relations by receiving many dignitaries from Japan such as Prince Akihito and Princess Michiko, Prime Minister Yoshiro Mori, Minoru Kiuchi, State Minister for Foreign Affairs, and others and participated in the 40 year, 50 year and 60 year anniversaries of the establishment of diplomatic relations between the two countries,” said the embassy.
    \nThe Japanese decorations are conferred upon foreigners twice a year, on April 29 and November 3, concurrently with the conferment of decorations and medals to Japanese nationals.
    \nThe Imperial Decorations is bestowed upon individuals of merit, in recognition of their outstanding contributions to the nation or public. This is also conferred upon foreign nationals who have made notable contributions to the promotion of relations between Japan and other countries in areas such as politics and diplomacy, research and education, medicine and social welfare, economy and industry, and culture and sports.
    \nPoudel, 76, has contributed to the activation of contacts between parliamentarians of the two countries, established the Japan Nepal Friendship Parliamentarian League in 1999 when he was the Speaker of the House of Representatives of Nepal.`,
  },
  {
    id: 43,
    image: require('../assets/images/rpoudel.jpeg'),
    title: 'Electoral alliance is the need of the country: NC leader Poudel',
    name: 'My Republic',
    for: 'Ramchandra Poudel',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tSenior leader of the ruling Nepali Congress (NC) Ram Chandra Poudel said that it is the need of the nation to forge an electoral alliance. 
      \nAt a program organized by Nepal Trade Union, Nepali Congress, Tanahu district chapter on the occasion of 133rd International Labor Day on Sunday, senior leader Poudel said electoral alliance with other ruling coalition partners is needed in places where NC has relatively weaker presence. 
      \nPoudel claimed that the electoral alliance among the five ruling coalition partners will bring forth good results. "The electoral alliance has been forged among the coalition partners to retain the incumbent government till the parliamentary elections," he explained, adding that the NC opted for electoral alliance to protect democracy, stability and achievements of political movements.
      \nPaudel also lauded the role of laborers to achieve democratic republic system in the country.`,
  },
  {
    id: 44,
    image: require('../assets/images/rp1.jpeg'),
    title: 'NC needs capable leadership: Poudel',
    name: 'Online Radio Nepal',
    for: 'Ramchandra Poudel',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tNepali Congress senior leader Ramchandra Poudel has said the party was in dire need of leadership that is capable to tackle new challenges.
    \nSpeaking in a programme organized to distribute health supplies to local levels and health centres here Saturday, senior leader Poudel argued that the current national politics was polarized to the group that favours democracy and another that is against democratic values and principles.
    \nHe further said that the NC had a responsibility to unite democratic forces and it should not miss this chance.
    \nOn the occasion, Poudel handed over different health materials worth about Rs 3. 5 million to 10 local levels of Tanahu, and one of Lamjung district. The health and safety stuffs include oxygen concentrators, face shields, mask, PPE and sanitizer among others.`,
  },
  {
    id: 45,
    image: require('../assets/images/gagan.jpeg'),
    title: 'PM must prove his non-involvement in Baskota case',
    name: 'Kathmandu Post',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    for: 'Gagan Thapa',
    description: `\tAddressing the controversy surrounding now former Minister of Communication and Information Technology Gokul Prasad Banskota, lawmaker Gagan Kumar Thapa has said that there's more to the issue as the chapter doesn't end with Baskota's resignation.
    \n"It is no longer about Gokul Baskota's resignation, the more important thing now is for the Prime Minister to prove that he was in no way involved in this case," the Nepali Congress lawmaker said.
    \n"Until that happens, there is no means for us to be assured. And by we, I do not mean any specific party. I mean the entire country that needs assurance."
    \nThapa further stated that looking at the circumstances and the series of events that unfolded, it would be very difficult to rule out the suspicion that all these things were taking place without the knowledge of the PM.
    \n"This matter cannot be dismissed with somebody's resignation. We will not let go of this issue until we reach a logical end," said Thapa before exiting the Federal Parliament premises.
    \nEarly on Thursday morning, reports of Baskota's involvement in a commission-scam had surfaced. Baskota tendered his resignation to the PM without facing the press in the afternoon.
    `,
  },
  {
    id: 46,
    image: require('../assets/images/gagan2.jpeg'),
    title: 'New budget to address the trade deficit',
    name: 'Online Khabar',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    for: 'Gagan Thapa',
    description: `\tThe House of Representatives (HoR), the lower house of the Federal Parliament, continued deliberations on the annual estimate of income and expenditure (budget) for fiscal year 2022/23 for the third day as well (Thursday). 
    \nSpeaker Agni Prasad Sapkota informed the session of the lower house that general discussions would be held on the principles of the budget which will be followed by detailed discussions on the ministry-wise headings of the budget later on. 
    \nNepali Congress lawmaker Gagan Kumar Thapa said that programmes related to decreasing the trade deficit and increasing the production are excellent ones in the budget. "The budget should be rigorously implemented as the programmes are sound. 
    \nHowever, the Ministry of Finance should call other ministries concerned and discuss the implementation modalities. The budget has brought the right policy on decreasing the trade deficit," he said, adding that the provisions on social security as provisioned in the budget are worth welcoming. There should be transparency in the sources of the budget, he stressed.`,
  },
  {
    id: 47,
    image: require('../assets/images/gagan3.jpeg'),
    title: 'Bill related to Constitutional Council will be withdrawn',
    name: 'My Republic',
    for: 'Gagan Thapa',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tNepali Congress (NC) General Secretary Gagan Thapa has said that the bill registered in the National Assembly to amend the act related to the Constitutional Council will be withdrawn.
    \nAddressing a program in Lalitpur on Monday, Thapa has stressed that the bill cannot be moved forward.
    \n"The bill related to the Constitutional Council registered in the National Assembly will be withdrawn within a few days. We had said that a similar ordinance brought by the then PM KP Sharma Oli was wrong. We cannot move the issue, that we called wrong yesterday, forward today saying it is right. The bill will be withdrawn," Thapa elaborated.  
    \nHe has added that discussion has already been held with Prime Minister Sher Bahadur Deuba, who is also NC president, about withdrawing the bill.
    \nThe bill amends the act in a way that appointments at constitutional bodies can be made even by just three members of the Constitutional Council.
    \nThe existing Constitutional Council Act stresses on efforts for consensus while taking decision failing which decision can be taken in the subsequent meeting by the majority of the total number of members.
    \nIt requires presence of at least four members of the six-strong Constitutional Council to constitute quorum. The bill brought by the government needs presence of just 50 percent of the total strength or three members to constitute quorum.
    \nThe Constitutional Council chaired by the prime minister (PM) includes chief justice (CJ), House speaker and deputy speaker, National Assembly chairman and the main opposition leader.
    \nThe post of deputy speaker is vacant since resignation of the then deputy speaker Shiva Maya Tumbahangphe before election of Agni Sapkota as speaker as she and Sapkota both came from the then ruling CPN. The Constitution requires House speaker and deputy speaker to come from different parties.
    \nCJ Cholendra Shumsher Rana has also been suspended after registration of impeachment motion against him and Deepak Kumar Karki is currently leading the judiciary as an acting CJ.
    \nIf the bill is endorsed Constitutional Council meeting can be convened and decision taken even if the main opposition leader KP Sharma Oli and National Assembly Chairman Ganesh Prasad Timalsina, who comes from CPN-UML, do not attend the meeting.
    \nThe amendment bill has a provision which says that Constitutional Council chairman and majority of at least 50 percent of the existing members can take decision through majority. This means PM Sher Bahadur Deuba, Speaker Agni Sapkota and Acting CJ Karki can take decision through majority even in absence of Oli and Timalsina.
    \nThe amendment bill brought by the Deuba government is similar in essence to the ordinance brought by the then Oli government in 2020 with a provision that allowed decision in the Constitutional Council with support of the majority of the existing members.
    \nThe Constitutional Council meeting chaired by Oli on December 15, 2020 had decided to fill the vacancies in accordance to the ordinance that he brought and was was hastily endorsed by President Bidya Devi Bhandari. The meeting held hours after Oli unilaterally brought the ordinance had recommended to fill all the vacant constitutional positions.
    \nOnly the then PM Oli, CJ Rana and National Assembly Chairman Ganesh Prasad Timalsina had attended the meeting with Speaker Agni Sapkota and the then main opposition leader Sher Bahadur Deuba boycotting the meeting.
    \nThe six-strong Constitutional Council only had five members even then with the post of deputy speaker remaining vacant since resignation of the then deputy speaker Shiva Maya Tumbahangphe before election of Sapkota as speaker.`,
  },
  {
    id: 48,
    image: require('../assets/images/sher3.jpeg'),
    title: 'Nepal SC orders to appoint Deuba as PM within next 28 hours',
    name: 'My Republic',
    for: 'Sher Bd. Deuba',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tNepal's Supreme Court on Monday reinstated the dissolved House of Representatives for a second time in nearly five months, delivering a major blow to Prime Minister K P Sharma Oli who is currently heading a minority government after losing a trust vote in the House.
    A five-member Constitutional Bench of the Supreme Court on Monday also ordered appointment of Nepali Congress President Sher Bahadur Deuba as prime minister within two days.
    The bench led by Chief Justice Cholendra Shumsher Rana had concluded hearings in the case last week. The bench comprised four other senior most justices -- Dipak Kumar Karki, Mira Khadka, Ishwar Prasad Khatiwada and Dr Ananda Mohan Bhattarai -- at the apex court.
    President Bidya Devi Bhandari had dissolved the 275-member lower house for the second time in five months on May 22 at the recommendation of Prime Minister Oli and announced snap elections on November 12 and November 19.
    Last week, the Election Commission had announced the schedule for mid-term elections despite the uncertainty over polls.
    As many as 30 petitions, including one by the opposition alliance led by the Nepali Congress, were filed against the dissolution of the House by the President.
    Nepal plunged into a political crisis on December 20 last year after President Bhandari dissolved the House and announced fresh elections on April 30 and May 10 at the recommendation of Prime Minister Oli, amidst a tussle for power within the ruling Nepal Communist Party (NCP).
    On February 23, the apex court reinstated the dissolved House of Representatives, in a setback to embattled Prime Minister Oli who was preparing for snap polls.`,
  },
  {
    id: 49,
    image: require('../assets/images/sher4.jpeg'),
    title: 'Nepal PM Deuba wins vote of confidence in Parliament',
    name: 'Online Khabar',
    for: 'Sher Bd. Deuba',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tNepal's new Prime Minister Sher Bahadur Deuba on Sunday comfortably won a vote of confidence in the reinstated lower House of Parliament.
    \nDeuba, the 75-year-old chief of the Nepali Congress, secured 165 votes in the 275-member House of Representatives, Himalayan Times reported. As many as 249 lawmakers participated in the voting process and 83 of them voted against Deuba while one lawmaker remained neutral, it said.
    \nA total of 136 votes were required for Deuba to win Parliament's confidence.
    \nDeuba took the oath of office and secrecy on July 13 for a record fifth time, a day after a five-member Constitutional Bench of the Supreme Court led by Chief Justice Cholendra Shumsher Rana reinstated the dissolved House of Representatives for the second time in five months.
    \nThe lower house was unconstitutionally dissolved by President Bidya Devi Bhandari for the second time in five months on May 22 at the recommendation of then Prime Minister KP Sharma Oli.
    \nDeuba won the vote of confidence on the first day of the restored House session.`,
  },
  {
    id: 50,
    image: require('../assets/images/gagan4.jpeg'),
    title: 'Gagan Thapa Ready To Discuss On Every Sentence Of IT Bill 2075',
    name: 'Kantipur Post',
    for: 'Gagan Thapa',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tChief Opposition Nepali Congress MP Gagan Thapa has said that he is ready to discuss with the government spokesperson Gokul Prasad Baskota about every word of the Information Technology Bill. Thapa openly asked Baskota, Minister of Communications and Information Technology, where he needs to come for the discussion. He said, “Where do you want to discuss the Bill, Minister? In Singha Durbar, in Parliament or at Maitighar?”
    \nThese phrases from Thapa were in response to Minister Baskota, who accused that the opposition has been raising voice against the bill without reading it. Thapa added, ‘The honorable minister has said that we have not read the Bill. I am ready to discuss every article, sub-article, and word of the bill.”
    \nHe said the Information Technology Bill would curtail civil liberties. He said, “We will take the initiative to stop this bill when the House starts in a few days. Students, opposition parties, journalists, and citizens come to the streets against the bill.”
    \nHe said MPs could not stop the Guthi Billin from the House due to the lack of a majority. Thapa added, “When you came to the road, the government bowed down. It is now time to come to the road against the IT bill.”
    \nHe termed the government cowardly. MP Thapa said, “This government is trying to intimidate the citizens after weak cowardice. Thapa raised the question regarding the real purpose of the majority.
    \nHe added that the contents of information technology bill are also included in the criminal law. He claimed that the right to write/speak was given only to the government-backed people.`,
  },
  {
    id: 51,
    image: require('../assets/images/gagan5.jpeg'),
    title: 'Gagan Thapa lashes out at PM Oli for his ‘double personality’',
    name: 'Kathmandu Post',
    for: 'Gagan Thapa',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tNepali Congress lawmaker Gagan Thapa lashed out at Prime Minister KP Sharma Oli saying that he blatantly surrendered to his Indian counterpart Narendra Modi during his recent two-day state visit to Nepal.
    \nSpeaking at the Parliament on Monday, Lawmaker Thapa came down heavily on Prime Minister Oli for his ‘double personality’ saying that he called his predecessors’ state visits to India as the ‘surrenderism’ while the Prime Minister himself embarked on a state visit to India soon after he became the Nepal’s Prime Minister.
    \n“Our Prime Minister roared like a tiger during his speech in defense of nationalism while he was receiving vote of confidence in the Parliament. But he did not speak even a single word on Indian blockade during PM Modi’s recent visit,” Thapa commended.
    \nThapa also criticized the government for allowing Modi to come to Nepal with his own security personnel clad in dress code arguing that it constituted double personality of PM Oli as he flayed his predecessors for doing the same in the past.
    \nCriticizing that Oli claimed himself as the one only nationalist while the rest are not during the election campaign, Thapa suggested that responsible leaders like Oli should stop using so called nationalistic discourse as a device to simply garner votes.
    \nMeanwhile, he urged one and all to come up with a single foreign policy and lead the nation accordingly.
    \nThe following is what Thapa said in the Parliament: 
    \nRespected Speaker,
    \nNepali and Indian media have made various comments on Indian Prime Minister Narendra Moidi’s recent state visit to Nepal.
    \nSome media have commented Modi’s visit in connection with the Karnataka's election while some with the growing influence of China. I am not concerned with the comments made by media on Modi’s visit. He himself has said that it was his pilgrimage. His religious visit has become successful. We wish very cordial ties between Nepal and India.  Hence, we are happy with Modi’s recent visit.
    \nMy concern is about our Prime Minister. While Prime Minister KP Oli was taking vote of confidence, he, I recall, roared like a tiger but yesterday during Modi’s visit ,while he was speaking about his visit, it seemed as if he was hiding something and kept mum on the Indian blockade.
    \nI recalled the day when PM Oli roared but it did not surprise me. I know that ‘a barking dog seldom bites.’ Prime Minister said, “We have not done anything against the interest of the nation.” No question was raised about it – not on the road nor in the Parliament. Why this humiliation? Prior to the Indian blockade, two Prime Ministers - Pushpa Kamal Dahal and Sher Bahadur Deuba - had held talks with the Indian Prime Minister. PM Oli criticized those meetings as the ‘surrenderism’.
    \nBP Koirala once had described the relations with India as ‘neutral’ for which then King Mahendra had written a letter to Indian government to sack BP, and silently allowed India to station Indian troops at Kalapani.
    \nNepal's federal constitution was promulgated due to the stance of then Prime Minister Sushil Koirala, which ultimately resulted in the blockade. Is it reasonable to call Sushil Koirala a “surrenderist”? A lawmaker from the ruling party is saying that Nepal government failed to ensure security for Modi when asked why Indian troops came to Nepal during Modi’s state visit. Our question is whether Kalapani issue is being repeated.
    \nRespected Speaker,
    \nUML Chairman had once criticized the Nepal government as ‘surrenderist’ for lavish activities carried out in deference of the Indian President’s visit to Nepal in the past. The Oli-led government hosted lots of activities in honor of Prime Minister Modi during his recent visit. Isn't it Oli's double personality? 
    \nPrime Minister has himself said that Nepal will not face Indian blockade anymore. 
    \nSome friends have said that ‘we forgive but not forget’. Nepal and India should move ahead in mutual understanding by mending ties. But it does not mean that I forget the woes caused by the blockade.
    \nRespected Speaker,
    \nPakistan’s Prime Minister does not say that the Chief Minister is discriminating against Muslims while he is visiting India.
    \nNepal is a democracy. We take this Voltaire’s  statement as a mantra. You may disagree with me. I will be fighting for the rights until the last drop of blood.
    \nWe should come up with a common view on the relations with India and China. Nepal reaps benefits from any kinds of foreign visits only when we are united.
    \nhapa suggested that responsible leaders like Oli should stop using so called nationalistic discourse as a device to simply garner votes.`,
  },
  {
    id: 52,
    image: require('../assets/images/rcp3.jpeg'),
    title: 'There is a conspiracy to make the country fail: Ram Chandra Poudel',
    name: 'Himalayan Times',
    for: 'Ramchandra Poudel',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tSenior Nepali Congress leader and coordinator of a high-level political mechanism Ram Chandra Poudel stated that a conspiracy is being hatched to make the country fail.
    \nSenior leader Poudel has said that he is engaged in the campaign to make the country successful against those who want to make the country fail.
    \nTalking to media persons at his residence in Tanahun today, Poudel said that his only goal is to make the country successful and prosperous.
    \nStating that there is a conspiracy to make the country fail, Poudel said, “We should all work towards defeating the attempt to make the country fail and lead it towards instability. I am continuing the same campaign.”`,
  },
  {
    id: 53,
    image: require('../assets/images/rcp4.jpeg'),
    title: 'Senior Leader Poudel Says He Will Be In Party Presidential Race',
    name: 'Online Khabar',
    for: 'Ramchandra Poudel',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    description: `\tNepali Congress (NC) senior leader Ramchandra Poudel said he would vie for the post of party president during the upcoming 14th General Convention.     
    \nDuring a press meet organized by the Nepal Press Union, Banke here today, the leader said though there were other aspirants for the presidential posts from his camp, finally one candidate would be chosen from the camp.
    \n“Democracy is also about collective leadership and we will demonstrate it during the nomination,” he said, adding that a delay in organizing the General Convention on time may push the party to a legal crisis and the possibility must be prevented. 
    \nHe took time to accuse the erstwhile CPN (UML)-led government of intending to take the country towards totalitarianism, prompting others to replace the party from the government. He advised the current NC-led government not to follow the ‘missteps’ of the previous government. 
    \nIn his response to a media query about whether the party would forge an alliance in the upcoming election, he said, “Party cadres wish the single competency in the election, but let’s see, it will be determined by the given context at that time.”`,
  },
];
