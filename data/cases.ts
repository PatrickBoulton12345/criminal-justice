/**
 * UK criminal sentencing dataset.
 *
 * Every case here is drawn from the public record. Each `source.url` should be
 * a reputable primary source (BBC News, the Guardian, the CPS, judiciary.uk
 * sentencing remarks). The `sentenceLabel` is the canonical answer string and
 * MUST appear verbatim in `options`.
 */

export type CaseSource = {
  title: string;
  publisher: string;
  url: string;
};

export type Case = {
  id: string;
  name: string;
  crime: string;
  sentenceLabel: string;
  sentenceDetail: string;
  options: string[];
  date: string;
  court: string;
  source: CaseSource;
  photo?: string;
};

export const CASES: Case[] = [
  {
    id: 'letby',
    name: 'Lucy Letby',
    crime:
      'Neonatal nurse who murdered seven babies and attempted to murder seven others on the neonatal unit at the Countess of Chester Hospital between June 2015 and June 2016, by injecting air, insulin or overfeeding milk.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at Manchester Crown Court on 21 August 2023 by Mr Justice Goss, who imposed a whole life order — meaning Letby will never be released. She is one of only a handful of women in UK legal history to receive a whole life order.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 50 years',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 30 years',
    ],
    date: '2023-08-21',
    court: 'Manchester Crown Court',
    source: {
      title: 'Lucy Letby: Nurse given whole-life order for baby murders',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-66576889',
    },
  },
  {
    id: 'couzens',
    name: 'Wayne Couzens',
    crime:
      'Serving Metropolitan Police officer who used his warrant card to falsely arrest, kidnap, rape and murder Sarah Everard in south London on 3 March 2021. He burned her body and dumped it in woodland near Ashford, Kent.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at the Old Bailey on 30 September 2021 by Lord Justice Fulford. The judge said the seriousness of the case was so exceptional, and the abuse of police powers so flagrant, that only a whole life order could meet the gravity of the offending.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
      'Life imprisonment, minimum 20 years',
    ],
    date: '2021-09-30',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Sarah Everard: Wayne Couzens given whole-life sentence',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-58746619',
    },
  },
  {
    id: 'abedi',
    name: 'Hashem Abedi',
    crime:
      'Younger brother of Manchester Arena suicide bomber Salman Abedi. Convicted of helping to plan and source materials for the attack at an Ariana Grande concert on 22 May 2017 in which 22 people, including children, were murdered and hundreds injured.',
    sentenceLabel: 'Life imprisonment, minimum 55 years',
    sentenceDetail:
      'Sentenced at the Old Bailey on 20 August 2020 by Mr Justice Jeremy Baker. Because Abedi was under 21 at the time of the offences, he could not legally receive a whole life order — the judge said the 55-year minimum was the longest determinate minimum term ever passed in an English murder case.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 55 years',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 30 years',
    ],
    date: '2020-08-20',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Manchester Arena bomb: Hashem Abedi gets minimum 55 years',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-53843778',
    },
  },
  {
    id: 'huntley',
    name: 'Ian Huntley',
    crime:
      'Soham school caretaker who murdered ten-year-old best friends Holly Wells and Jessica Chapman at his home in Soham, Cambridgeshire, on 4 August 2002 and dumped their bodies in a ditch near RAF Lakenheath.',
    sentenceLabel: 'Life imprisonment, minimum 40 years',
    sentenceDetail:
      'Convicted on 17 December 2003 at the Old Bailey and sentenced to life imprisonment by Mr Justice Moses, with the minimum tariff to be set later. On 29 September 2005, sitting in the High Court, Moses J set the minimum term at 40 years.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 50 years',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 30 years',
    ],
    date: '2005-09-29',
    court: 'High Court (originally Old Bailey)',
    source: {
      title: 'Huntley to serve a minimum of 40 years',
      publisher: 'RTÉ News',
      url: 'https://www.rte.ie/news/2005/0929/68047-soham/',
    },
  },
  {
    id: 'mair',
    name: 'Thomas Mair',
    crime:
      'Far-right extremist who shot and stabbed to death the Labour MP for Batley and Spen, Jo Cox, in Birstall, West Yorkshire, on 16 June 2016 — a week before the EU referendum. He shouted "Britain first" during the attack.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at the Old Bailey on 23 November 2016 by Mr Justice Wilkie. The judge said the murder was a politically motivated act of terrorism designed to advance Mair\'s white-supremacist cause and that only a whole life order would suffice.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 35 years',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
    ],
    date: '2016-11-23',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Jo Cox murder: Thomas Mair jailed for life',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-england-38071894',
    },
  },
  {
    id: 'ali-amess',
    name: 'Ali Harbi Ali',
    crime:
      'Islamic State sympathiser who stabbed the Conservative MP for Southend West, Sir David Amess, to death at a constituency surgery in Leigh-on-Sea, Essex, on 15 October 2021. He had spent years researching MPs as targets.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at the Old Bailey on 13 April 2022 by Mr Justice Sweeney. The judge ruled the murder was an act of terrorism intended to advance an Islamist political cause and that the seriousness of the offence required a whole life order.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 32 years',
      'Life imprisonment, minimum 28 years',
    ],
    date: '2022-04-13',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Sir David Amess: Ali Harbi Ali given whole-life order',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-england-essex-61090426',
    },
  },
  {
    id: 'fuller',
    name: 'David Fuller',
    crime:
      'Hospital electrician who murdered two young women — Wendy Knell and Caroline Pierce — in Tunbridge Wells in 1987, evading detection for over thirty years. Whilst working at hospital mortuaries he sexually abused the bodies of more than 100 women and girls between 2008 and 2020.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at Maidstone Crown Court on 15 December 2021 by Mrs Justice Cheema-Grubb, who said the case was "off the scale of depravity" and imposed a whole life order for the two murders.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
    ],
    date: '2021-12-15',
    court: 'Maidstone Crown Court',
    source: {
      title: 'David Fuller given whole-life sentence for murders and mortuary abuse',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-england-kent-59650475',
    },
  },
  {
    id: 'bridger',
    name: 'Mark Bridger',
    crime:
      'Abducted five-year-old April Jones near her home in Machynlleth, Powys, on 1 October 2012 and murdered her. Her body has never been found, but fragments of bone consistent with a child of her age were recovered from the fireplace at his rented cottage.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at Mold Crown Court on 30 May 2013 by Mr Justice Griffith Williams. The judge said it was a "pitiless and merciless" murder and that there was no doubt this was a case where the seriousness was so exceptional that the appropriate sentence was a whole life order.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
    ],
    date: '2013-05-30',
    court: 'Mold Crown Court',
    source: {
      title: 'April Jones murder: Mark Bridger gets whole-life term',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-wales-mid-wales-22707473',
    },
  },
  {
    id: 'port',
    name: 'Stephen Port',
    crime:
      'Serial killer dubbed the "Grindr killer" who drugged and murdered four young men — Anthony Walgate, Gabriel Kovari, Daniel Whitworth and Jack Taylor — at his flat in Barking, east London, between June 2014 and September 2015. He raped his victims and dumped their bodies near his home.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at the Old Bailey on 25 November 2016 by Mr Justice Openshaw. The judge said the murders were "a campaign of rape and murder" and only a whole life order would meet the gravity of the offences.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
    ],
    date: '2016-11-25',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Stephen Port: Grindr serial killer given whole-life sentence',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-england-london-38096578',
    },
  },
  {
    id: 'wright',
    name: 'Steve Wright',
    crime:
      'Forklift driver from Ipswich convicted of murdering five women — Gemma Adams, Tania Nicol, Anneli Alderton, Annette Nicholls and Paula Clennell — over six weeks in late 2006. The victims worked as prostitutes in the town\'s red-light district.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at Ipswich Crown Court on 22 February 2008 by Mr Justice Gross, who imposed a whole life order, saying it was "right" Wright should never be released.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
    ],
    date: '2008-02-22',
    court: 'Ipswich Crown Court',
    source: {
      title: 'Wright given whole-life jail term',
      publisher: 'BBC News',
      url: 'http://news.bbc.co.uk/1/hi/england/suffolk/7257581.stm',
    },
  },
  {
    id: 'tabak',
    name: 'Vincent Tabak',
    crime:
      'Dutch engineer who strangled his next-door neighbour, the 25-year-old landscape architect Joanna Yeates, at her flat in Clifton, Bristol, on 17 December 2010. He hid her body, which was found dumped on a roadside on Christmas morning.',
    sentenceLabel: 'Life imprisonment, minimum 20 years',
    sentenceDetail:
      'Sentenced at Bristol Crown Court on 28 October 2011 by Mr Justice Field, who set a 20-year minimum tariff. Tabak had denied murder but admitted manslaughter; the jury rejected that defence.',
    options: [
      'Life imprisonment, minimum 25 years',
      'Life imprisonment, minimum 20 years',
      'Life imprisonment, minimum 15 years',
      'Whole life order',
    ],
    date: '2011-10-28',
    court: 'Bristol Crown Court',
    source: {
      title: 'Vincent Tabak: Dutch engineer jailed for Joanna Yeates murder',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-england-15482380',
    },
  },
  {
    id: 'hazell',
    name: 'Stuart Hazell',
    crime:
      'Murdered his partner\'s twelve-year-old granddaughter, Tia Sharp, at the family home in New Addington, south London, in August 2012, and hid her body in the loft for a week while taking part in public appeals to find her.',
    sentenceLabel: 'Life imprisonment, minimum 38 years',
    sentenceDetail:
      'Sentenced at the Old Bailey on 14 May 2013 by Mr Justice Nicol after pleading guilty mid-trial. The judge set a 38-year minimum tariff, citing the sexual element of the murder and the calculated deception of Tia\'s family.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 40 years',
      'Life imprisonment, minimum 38 years',
      'Life imprisonment, minimum 30 years',
    ],
    date: '2013-05-14',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Tia Sharp murder: Stuart Hazell jailed for at least 38 years',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-england-london-22517941',
    },
  },
  {
    id: 'rwest',
    name: 'Rosemary West',
    crime:
      'Convicted of ten murders, mostly young women, committed jointly with her husband Fred West at 25 Cromwell Street, Gloucester, between 1971 and 1987. The victims included her own stepdaughter Charmaine and her daughter Heather.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at Winchester Crown Court on 22 November 1995 to ten life sentences by Mr Justice Mantell. Home Secretary Jack Straw later imposed a whole-life tariff, which was confirmed when judicial review of life tariffs transferred to the courts.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
      'Life imprisonment, minimum 20 years',
    ],
    date: '1995-11-22',
    court: 'Winchester Crown Court',
    source: {
      title: 'British jury convicts West of 10 murders',
      publisher: 'UPI Archives',
      url: 'https://www.upi.com/Archives/1995/11/22/British-jury-convicts-West-of-10-murders/4833817016400/',
    },
  },
  {
    id: 'shipman',
    name: 'Harold Shipman',
    crime:
      'Hyde GP convicted of murdering 15 of his elderly patients with lethal opiate doses. The Shipman Inquiry led by Dame Janet Smith later concluded he had killed at least 215 patients, making him the most prolific serial killer in modern British history.',
    sentenceLabel: 'Whole life order',
    sentenceDetail:
      'Sentenced at Preston Crown Court on 31 January 2000 by Mr Justice Forbes, who imposed 15 concurrent life sentences and recommended he never be released. The Home Secretary set a whole-life tariff. Shipman took his own life in Wakefield prison in 2004.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 50 years',
      '15 life sentences with minimum 30-year tariff',
      'Life imprisonment, minimum 40 years',
    ],
    date: '2000-01-31',
    court: 'Preston Crown Court',
    source: {
      title: 'GP found guilty of mass murder',
      publisher: 'BBC News',
      url: 'http://news.bbc.co.uk/1/hi/uk/616692.stm',
    },
  },
  {
    id: 'nilsen',
    name: 'Dennis Nilsen',
    crime:
      'Civil servant and former police constable who murdered at least twelve young men at his flats in Cricklewood and Muswell Hill, north London, between 1978 and 1983. He dismembered and disposed of their bodies, which were discovered when human remains blocked his drains.',
    sentenceLabel: 'Life imprisonment, minimum 25 years',
    sentenceDetail:
      'Sentenced at the Old Bailey on 4 November 1983 by Mr Justice Croom-Johnson, who recommended he serve at least 25 years. The Home Secretary later imposed a whole-life tariff which was confirmed by the Lord Chief Justice in 2006. Nilsen died in HMP Full Sutton in 2018.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
      'Life imprisonment, minimum 20 years',
    ],
    date: '1983-11-04',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Serial killer Dennis Nilsen dies in prison',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-44120625',
    },
  },
  {
    id: 'sutcliffe',
    name: 'Peter Sutcliffe',
    crime:
      'The "Yorkshire Ripper" — a Bradford lorry driver who murdered 13 women and attempted to murder seven more across northern England between 1975 and 1980, mostly attacking lone women at night with a hammer and knife.',
    sentenceLabel: 'Life imprisonment, minimum 30 years',
    sentenceDetail:
      'Sentenced at the Old Bailey on 22 May 1981 by Mr Justice Boreham, who recommended a 30-year minimum. On 16 July 2010 the High Court imposed a whole-life tariff. He died in HMP Frankland in November 2020.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
      'Life imprisonment, minimum 20 years',
    ],
    date: '1981-05-22',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Yorkshire Ripper Peter Sutcliffe dies aged 74',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-england-54928296',
    },
  },
  {
    id: 'allitt',
    name: 'Beverley Allitt',
    crime:
      'State Enrolled Nurse on the children\'s ward at Grantham and Kesteven Hospital, Lincolnshire, who in 1991 murdered four children and attempted to murder or harm nine others with insulin, potassium and air injections.',
    sentenceLabel: '13 life sentences with 30-year minimum tariff',
    sentenceDetail:
      'Sentenced at Nottingham Crown Court on 28 May 1993 by Mr Justice Latham to 13 concurrent life sentences. Diagnosed with Munchausen syndrome by proxy, she was detained at Rampton high-security hospital under the Mental Health Act. The High Court set a 30-year minimum tariff in 2007.',
    options: [
      'Whole life order',
      '13 life sentences with 30-year minimum tariff',
      'Life imprisonment, minimum 25 years',
      'Hospital order with no minimum term',
    ],
    date: '1993-05-28',
    court: 'Nottingham Crown Court',
    source: {
      title: 'Beverley Allitt — biography and case summary',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Beverley_Allitt',
    },
  },
  {
    id: 'pitchfork',
    name: 'Colin Pitchfork',
    crime:
      'Bakery worker who raped and murdered two 15-year-old schoolgirls — Lynda Mann in 1983 and Dawn Ashworth in 1986 — in villages near Leicester. The first person ever convicted of murder using DNA-profiling evidence, after trying to evade a mass screening by getting a friend to give a sample in his name.',
    sentenceLabel: 'Life imprisonment, minimum 30 years',
    sentenceDetail:
      'Sentenced to life imprisonment at Leicester Crown Court on 22 January 1988 by Mr Justice Otton. The Home Secretary subsequently set a 30-year minimum tariff. The Court of Appeal reduced the minimum to 28 years in 2009; he was first released on licence in 2021, recalled, and released again, prompting a national debate over Parole Board decisions.',
    options: [
      'Whole life order',
      'Life imprisonment, minimum 30 years',
      'Life imprisonment, minimum 25 years',
      'Life imprisonment, minimum 20 years',
    ],
    date: '1988-01-22',
    court: 'Leicester Crown Court',
    source: {
      title: 'Colin Pitchfork: Double child killer freed from prison',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-england-leicestershire-58439478',
    },
  },
  {
    id: 'martin',
    name: 'Tony Martin',
    crime:
      'Norfolk farmer who shot dead 16-year-old burglar Fred Barras and wounded another intruder, Brendan Fearon, with an unlicensed shotgun at his isolated farmhouse "Bleak House" near Emneth Hungate in August 1999.',
    sentenceLabel: '5 years’ imprisonment',
    sentenceDetail:
      'Originally convicted of murder and sentenced to life at Norwich Crown Court on 19 April 2000. The Court of Appeal in October 2001 substituted a manslaughter conviction on grounds of diminished responsibility and reduced the sentence to five years. Martin was released in 2003 after serving three.',
    options: [
      'Life imprisonment, minimum 25 years',
      '5 years’ imprisonment',
      '3 years’ imprisonment, suspended',
      '8 years’ imprisonment',
    ],
    date: '2001-10-30',
    court: 'Court of Appeal (originally Norwich Crown Court)',
    source: {
      title: "Court reduces farmer's murder conviction to manslaughter",
      publisher: 'The Irish Times',
      url: 'https://www.irishtimes.com/news/court-reduces-farmer-s-murder-conviction-to-manslaughter-1.334824',
    },
  },
  {
    id: 'glitter',
    name: 'Paul Gadd (Gary Glitter)',
    crime:
      'Glam rock singer convicted of one count of attempted rape, four counts of indecent assault and one of having sex with a girl under 13, against three girls aged between eight and 13 in the 1970s and early 1980s.',
    sentenceLabel: '16 years’ imprisonment',
    sentenceDetail:
      'Sentenced at Southwark Crown Court on 27 February 2015 by Judge Alistair McCreath, who said Gadd had shown no remorse and had taken advantage of the trust placed in a celebrity. Briefly released in February 2023, he was recalled to prison the same month for breaching licence conditions.',
    options: [
      '12 years’ imprisonment',
      '16 years’ imprisonment',
      '8 years’ imprisonment',
      'Life imprisonment, minimum 10 years',
    ],
    date: '2015-02-27',
    court: 'Southwark Crown Court',
    source: {
      title: 'Gary Glitter jailed for 16 years for sex attacks on girls',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-31659093',
    },
  },
  {
    id: 'harris',
    name: 'Rolf Harris',
    crime:
      'Australian-born television entertainer convicted of 12 counts of indecent assault on four girls aged between seven or eight and 19 between 1968 and 1986, including one of his daughter\'s best friends.',
    sentenceLabel: '5 years 9 months’ imprisonment',
    sentenceDetail:
      'Sentenced at Southwark Crown Court on 4 July 2014 by Mr Justice Sweeney, who said Harris had taken advantage of his celebrity. He was released on licence in May 2017 having served just under three years; he died in May 2023.',
    options: [
      '8 years’ imprisonment',
      '5 years 9 months’ imprisonment',
      '4 years’ imprisonment',
      '3 years’ imprisonment, suspended',
    ],
    date: '2014-07-04',
    court: 'Southwark Crown Court',
    source: {
      title: 'Rolf Harris jailed for five years and nine months',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-28158926',
    },
  },
  {
    id: 'hall',
    name: 'Stuart Hall',
    crime:
      'BBC broadcaster, host of It\'s a Knockout, who pleaded guilty to 14 counts of indecent assault against girls — the youngest aged nine — committed between 1967 and 1985.',
    sentenceLabel: '15 months’ imprisonment',
    sentenceDetail:
      'Sentenced at Preston Crown Court on 17 June 2013 by Judge Anthony Russell QC. The sentence was widely criticised as too lenient; the Attorney General referred it to the Court of Appeal, which doubled it to 30 months on 26 July 2013. Hall later received further sentences for separate offences.',
    options: [
      '5 years’ imprisonment',
      '30 months’ imprisonment',
      '15 months’ imprisonment',
      'Suspended sentence',
    ],
    date: '2013-06-17',
    court: 'Preston Crown Court',
    source: {
      title: 'Stuart Hall jailed for 15 months for indecent assaults',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-22941468',
    },
  },
  {
    id: 'choudary',
    name: 'Anjem Choudary',
    crime:
      'Radical Islamist preacher convicted of directing the proscribed terrorist organisation Al-Muhajiroun and addressing meetings of its New York-based offshoot via Zoom, encouraging support for the banned group.',
    sentenceLabel: 'Life imprisonment, minimum 28 years',
    sentenceDetail:
      'Sentenced at Woolwich Crown Court on 30 July 2024 by Mr Justice Wall, who imposed a life sentence with a minimum term of 28 years. The judge said Choudary had been "a leading figure" in the network for over 20 years and continued to direct it from prison and after release.',
    options: [
      'Life imprisonment, minimum 28 years',
      'Life imprisonment, minimum 20 years',
      '14 years’ imprisonment',
      '10 years’ imprisonment',
    ],
    date: '2024-07-30',
    court: 'Woolwich Crown Court',
    source: {
      title: 'Anjem Choudary jailed for life over terror group leadership',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/articles/cw88l9270lzo',
    },
  },
  {
    id: 'nadir',
    name: 'Asil Nadir',
    crime:
      'Turkish Cypriot tycoon and founder of the Polly Peck conglomerate, convicted of stealing nearly £29 million from the company in the late 1980s before fleeing to northern Cyprus in 1993. He returned voluntarily to face trial in 2010.',
    sentenceLabel: '10 years’ imprisonment',
    sentenceDetail:
      'Sentenced at the Old Bailey on 23 August 2012 by Mr Justice Holroyde, who said Nadir had stolen the money "more out of arrogant greed than need". He was transferred to Turkey in 2016 to serve the rest of his sentence.',
    options: [
      '6 years’ imprisonment',
      '10 years’ imprisonment',
      '14 years’ imprisonment',
      'Suspended sentence',
    ],
    date: '2012-08-23',
    court: 'Old Bailey (Central Criminal Court)',
    source: {
      title: 'Asil Nadir jailed for 10 years for Polly Peck theft',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/business-19354009',
    },
  },
  {
    id: 'clifford',
    name: 'Max Clifford',
    crime:
      'Celebrity publicist convicted of eight counts of indecent assault against four girls and women aged between 15 and 19, committed between 1977 and 1984. The first prosecution arising from Operation Yewtree, the police investigation triggered by the Jimmy Savile revelations.',
    sentenceLabel: '8 years’ imprisonment',
    sentenceDetail:
      'Sentenced at Southwark Crown Court on 2 May 2014 by Judge Anthony Leonard QC. Clifford died in custody in December 2017 having maintained his innocence throughout.',
    options: [
      '4 years’ imprisonment',
      '5 years’ imprisonment',
      '8 years’ imprisonment',
      '12 years’ imprisonment',
    ],
    date: '2014-05-02',
    court: 'Southwark Crown Court',
    source: {
      title: 'Max Clifford jailed for eight years',
      publisher: 'BBC News',
      url: 'https://www.bbc.co.uk/news/uk-27258808',
    },
  },
];

export const TOTAL_CASES = CASES.length;
