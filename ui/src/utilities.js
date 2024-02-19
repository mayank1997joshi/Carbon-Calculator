const commonUtilities = {
  projectslist:
    'lg:w-[100%] lg:flex lg:justify-between lg:gap-x-[30px] lg:py-[12px] lg:px-[20px]',
  parent:
    'lg:bg-[#fbbf24] lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[10px] lg:p-[20px] lg:w-[100%]',
  family: 'lg:text-[#ef4444] lg:text-[13px] lg:font-sans lg:font-[600]',
  css: 'lg:text-[15px] lg:font-[600] lg:font-sans',
  flexcol: 'lg:flex lg:flex-col lg:gap-y-[13px]',
  main: 'lg:p-[1rem] lg:w-[100%] lg:bg-[#fbbf24] lg:flex lg:flex-col lg:gap-y-[1rem]',
  inputlabel: 'lg:flex lg:flex-col lg:gap-y-[5px]',
  card1: 'lg:flex lg:flex-col lg:w-[100%] lg:p-[20px] lg:border-none',
  boxcontainer:
    'lg:bg-[#ced2d9ff] lg:border-[1px] lg:border-solid lg:border-[rgb(30, 36, 44)] lg:flex lg:flex-col lg:gap-y-[10px] lg:p-[24px] lg:rounded-[8px] lg:max-w-[1055px] lg:w-[100%]',
  boxclass:
    'lg:bg-[#12181fff] lg:border-[1px] lg:border-solid lg:border-[rgb(30, 36, 44)] lg:text-[None] lg:flex lg:flex-col lg:gap-y-[15px] lg:pt-[24px] lg:w-[100%] lg:rounded-[8px]',
  select: 'lg:w-[100%] lg:bg-[#ced2d9ff] lg:p-[10px] lg:text-[#ffffffff]',
  card: 'lg:flex lg:justify-between lg:items-center lg:gap-[10px] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)]',
  flexcol: 'lg:flex lg:flex-col',
  columnContainerAlignStart: 'lg:items-start',
  rowContainerAlignCentre: 'lg:items-center',
  rowContainerSpace: 'lg:w-[100%] lg:justify-between',
  headingstyle:
    'lg:leading-[normal] lg:text-[15px] lg:font-[600] lg:text-[None] lg:whitespace-no-wrap lg:font-roboto',
  fontstyle1:
    'lg:text-[#090b0e] lg:text-[15px] lg:leading-[normal] lg:font-roboto lg:font-[600]',
  fontstyle2:
    'lg:text-[None] lg:text-[17px] lg:leading-[normal] lg:font-sans lg:font-[600]',
  fontstyle4:
    'lg:text-[#090b0e] lg:text-[15px] lg:leading-[normal] lg:font-roboto lg:font-[600]',
  headingstyle2:
    'lg:leading-[normal] lg:text-[15px] lg:font-[600] lg:text-[None] lg:whitespace-no-wrap lg:font-roboto',
  chipfont:
    'lg:py-[3px] lg:px-[12px] lg:text-[#3a3a3aff] lg:bg-[#e9e9e9ff] lg:leading-[normal] lg:text-[14px]',
  ligthBoldweight: 'lg:font-[600]',
  parent:
    'lg:w-[100%] lg:bg-[#ffffffff] lg:flex lg:flex-col lg:gap-y-[15px] lg:p-[1rem]',
  listitem: 'lg:flex lg:items-center lg:gap-x-[25px] lg:mb-[33px]',
  maincontainer: 'lg:bg-[#090b0e] lg:flex lg:flex-col lg:p-[15px] lg:w-[100%]',
  card1: 'lg:w-[100%] lg:flex lg:flex-col lg:gap-y-[10px] lg:p-[15px]',
  css: 'lg:text-[13px] lg:font-sans lg:font-[600] lg:text-[#ffffffff]',
  subparentstyle: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  inputTable: 'lg:w-[150px] lg:p-[10px]',
  TableCell: 'lg:w-[2%] lg:table-cell lg:py-[8px] lg:px-[15px]',
  planandpricingcard:
    'lg:flex lg:flex-col lg:w-[100%] lg:max-w-[480px] lg:bg-[None]',
  primarybtn:
    'lg:flex lg:items-center lg:justify-center lg:py-[8px] lg:px-[4px] lg:bg-[#090b0e]',
  columncontainer: 'lg:items-start',
  card: 'lg:bg-[#ffffffff] lg:border-[1px] lg:border-solid lg:border-[rgb(247, 252, 252)] lg:p-[1rem] lg:flex lg:items-center lg:gap-x-[1rem] lg:w-[100%] lg:rounded-[4px]',
  parentstyle: 'lg:flex lg:flex-col lg:gap-y-[20px]',
  inputstyle: 'lg:w-[100%] lg:text-[14px]',
  parent:
    'lg:bg-[#525a66ff] lg:w-[100%] lg:p-[20px] lg:flex lg:flex-col lg:gap-y-[14px]',
  label: 'lg:w-[fit-content]',
  input:
    'lg:w-[100%] lg:border-none lg:text-[16.5px] lg:font-rubik lg:whitespace-no-wrap lg:overflow-hidden',
  flexrow: 'lg:flex lg:items-center lg:gap-x-[1rem]',
  alignstart: 'lg:items-start',
  rowdirection: 'lg:flex',
  card: 'lg:bg-[#0284c7] lg:w-[100%] lg:p-[15px]',
  main: 'lg:bg-[#090b0e] lg:w-[100%] lg:flex lg:flex-col lg:gap-y-[1rem] lg:p-[1rem]',
  ContainerTop: 'lg:mt-[25px]',
  bgsec: 'lg:text-[#ffffffff]',
  AccordianHeaderText: 'lg:text-[18px] lg:font-[600]',
  AccordianHeaderPara: 'lg:text-[None]',
  accordianBody: 'lg:py-[10px] lg:px-[50px] lg:flex lg:justify-between',
  listlinkstyle:
    'lg:flex lg:items-center lg:py-[3px] lg:px-[0px] lg:gap-x-[8px] lg:no-underline lg:text-[#ced2d9ff]',
  boldtext:
    'lg:tracking-[0.4px] lg:text-[14px] lg:text-[#525a66ff] lg:font-[700]',
  container:
    'lg:bg-[#ced2d9ff] lg:w-[100%] lg:flex lg:flex-col lg:gap-y-[20px] lg:text-[#7dd3fc]',
  typo: 'lg:text-[15px] lg:font-rubik',
  tab: 'lg:py-[1rem] lg:px-[0.9rem]',
  link: 'lg:no-underline lg:flex lg:gap-x-[10px] lg:font-rubik',
  box: 'lg:border-[1px] lg:border-solid lg:flex lg:flex-col lg:w-[100%] lg:h-[auto] lg:p-[1.25rem] lg:rounded-[4px] lg:gap-y-[1.4rem]',
  cardbody: 'lg:flex lg:flex-col',
  list: 'lg:flex lg:flex-col lg:gap-y-[10px] lg:list-none lg:pl-[0px]',
  listlistitem: 'lg:flex lg:flex-col',
  listitem: 'lg:text-[13px] lg:font-[500] lg:leading-[normal]',
  listitem2:
    'lg:flex lg:justify-between lg:items-center lg:gap-x-[10px] lg:py-[15px] lg:px-[20px]',
  main: 'lg:w-[100%] lg:p-[24px] lg:bg-[#090b0e]',
  flexcolumn: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  linkthin: 'lg:text-[#ef4444] lg:no-underline',
  alignitemscenter: 'lg:flex lg:items-center lg:gap-x-[10px]',
  flexcolumn: 'lg:flex lg:flex-col',
  flexrow: 'lg:flex',
  divider: 'lg:bg-[#ffffffff] lg:h-[0.3px] lg:w-[100%]',
  card: 'lg:bg-[#7dd3fc] lg:border-[1px] lg:border-solid lg:border-[#ef4444] lg:flex lg:flex-col lg:py-[20px] lg:px-[0px] lg:w-[100%] lg:gap-y-[10px]',
  rowFlexProps: 'lg:items-center lg:justify-around lg:w-[100%]',
  link: 'lg:text-[#dce3e6ff] lg:flex lg:w-[100%] lg:py-[5px] lg:px-[0px] lg:no-underline lg:gap-[10px] lg:items-center',
  parent:
    'lg:flex lg:flex-col lg:bg-[#ffffffff] lg:gap-y-[24px] lg:p-[20px] lg:w-[100%]',
  head: 'lg:flex lg:justify-between lg:items-center lg:p-[5px] lg:w-[100%] lg:whitespace-no-wrap',
  spacebetween: 'lg:flex lg:items-center lg:justify-between',
  sidebarlink:
    'lg:flex lg:items-center lg:gap-x-[10px] lg:no-underline lg:text-[#ced2d9ff] lg:font-[700]',
  Label: 'lg:text-[#696e6fff] lg:font-[500] lg:text-[16px]',
  description: 'lg:text-[14px] lg:font-[400]',
  transparentbutton: 'lg:bg-[transparent] lg:border-none lg:w-[fit-content]',
  text: 'lg:text-[14px] lg:text-[#ced2d9ff]',
  boxflexcolumngap10px: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  labelwidth: 'lg:w-[fit-content]',
  labelstyle: 'lg:font-[600] lg:text-[14px] lg:w-[fit-content]',
  disabledbtn:
    'lg:bg-[#0284c7] lg:text-[#ffffffff] lg:w-[100%] lg:flex lg:items-center lg:justify-center lg:py-[8px] lg:px-[0]',
  linkstyle:
    'lg:text-[None] lg:cursor-pointer lg:break-all lg:rounded-[4px] lg:no-underline lg:text-left',
  avatar: 'lg:h-[25px] lg:w-[25px]',
  cardstyle:
    'lg:flex lg:flex-col lg:p-[40px] lg:bg-[None] lg:text-[#7dd3fc] lg:rounded-[12px] lg:w-[100%] lg:max-w-[630px]',
  labelwithinputs: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  heading: 'lg:text-[22px] lg:font-[600]',
  tablenametypo: 'lg:whitespace-no-wrap lg:overflow-hidden lg:font-[bold]',
  tablenumtypo: 'lg:text-[#ced2d9ff] lg:font-[bold]',
  select:
    'lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:text-[None] lg:text-[14px]',
  tablehead: 'lg:bg-[None] lg:table-header-group lg:border-none lg:w-[100%]',
  tablebody: 'lg:table-row-group lg:border-none',
  chip: 'lg:text-[14px] lg:bg-[#227568] lg:py-[4px] lg:px-[8px] lg:w-[50px] lg:text-[#7dd3fc]',
  tablecell:
    'lg:table-cell lg:w-[44%] lg:py-[20px] lg:px-[10px] lg:min-w-[101px]',
  tablecell2:
    'lg:table-cell lg:text-center lg:py-[20px] lg:px-[0px] lg:min-w-[166px]',
  linearcard:
    'lg:w-[100%] lg:text-[#7dd3fc] lg:flex lg:items-center lg:flex-col lg:text-[14px] lg:border-[1px] lg:border-solid lg:border-[#fbbf24]',
  space: 'lg:flex lg:items-center lg:justify-between',
  primarybutton: 'lg:border-none lg:bg-[#0045e5ff] lg:text-[#ffffffff]',
  emaillabel: 'lg:text-[None] lg:text-[14px] lg:w-[fit-content]',
  signininput:
    'lg:text-[14px] lg:py-[10px] lg:px-[15px] lg:w-[100%] lg:bg-[transparent] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)]',
  selectcontainer:
    'lg:text-[#4ade80] lg:text-[14px] lg:border-none lg:whitespace-no-wrap',
  sidebarbutton:
    'lg:w-[100%] lg:p-[14px] lg:items-center lg:text-[#525a66ff] lg:bg-[transparent] lg:gap-x-[10px]',
  checkboxlabelcontainer: 'lg:items-center lg:p-[10px] lg:w-[100%]',
  transperentbutton:
    'lg:text-[#7dd3fc] lg:bg-[transparent] lg:border-none lg:text-[12px] lg:items-center lg:font-[600]',
  modelcard:
    'lg:bg-[#ffffffff] lg:p-[24px] lg:flex lg:flex-col lg:items-center lg:w-[100%] lg:gap-y-[20px]',
  linktext: 'lg:text-[#0284c7] lg:no-underline lg:text-[14px] lg:font-[600]',
  borderbottom: '',
  parentcard:
    'lg:w-[100%] lg:p-[15px] lg:flex lg:flex-col lg:gap-y-[10px] lg:bg-[#525a66ff]',
  flexrow: 'lg:flex',
  text: 'lg:text-[14px] lg:text-center lg:text-[#7dd3fc]',
  flexcoldirection: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  flexcol: 'lg:flex lg:flex-col lg:gap-y-[1rem]',
  parent:
    'lg:flex lg:flex-col lg:bg-[#ffffffff] lg:gap-y-[10px] lg:p-[10px] lg:max-w-[1100px] lg:w-[100%]',
  fontstyle1:
    'lg:leading-[normal] lg:text-[None] lg:font-sans lg:text-[15px] lg:font-[600]',
  fontstyle2:
    'lg:leading-[normal] lg:text-[15px] lg:font-sans lg:font-[600] lg:text-[None]',
  flexbox: 'lg:flex lg:flex-col lg:items-center lg:gap-[4px]',
  card: 'lg:p-[15px] lg:flex lg:flex-col lg:gap-y-[25px]',
  gridcard:
    'lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:p-[1rem]',
  gridiconcard:
    'lg:w-[100%] lg:bg-[#0284c7] lg:border-[1px] lg:border-solid lg:p-[30px]',
  cardcontainer:
    'lg:items-start lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:bg-[#090b0e] lg:p-[20px]',
  tabelcell3:
    'lg:text-[#696e6fff] lg:text-[13px] lg:w-[22%] lg:py-[20px] lg:px-[15px] lg:table-cell lg:min-w-[133px]',
  boldtext: 'lg:text-[#090b0e] lg:text-[14px] lg:font-[600]',
  parent: 'lg:flex lg:flex-col lg:gap-[24px] lg:p-[1rem] lg:w-[100%]',
  card: 'lg:w-[100%] lg:flex lg:flex-col lg:gap-y-[12px] lg:p-[8px] lg:shadow-none lg:h-[170px]',
  flexbox: 'lg:flex lg:gap-[10px]',
  feedbacktypo:
    'lg:text-[12px] lg:text-center lg:text-[#7dd3fc] lg:leading-[normal]',
  searchbar:
    'lg:max-w-[370px] lg:bg-[#090b0e] lg:rounded-[20px] lg:items-center lg:py-[10px] lg:px-[15px] lg:h-[fit-content]',
  panel:
    'lg:bg-[#f2f5fa] lg:py-[30px] lg:px-[45px] lg:flex lg:flex-col lg:gap-y-[25px] lg:pb-[150px]',
  nesteddropdownheader: 'lg:flex lg:justify-between',
  nesteddropdownmenu:
    'lg:left-[243px] lg:top-[-10px] lg:p-[15px] lg:border-[1px] lg:border-solid lg:border-[rgba(0,0,0,.12)] lg:rounded-[0px]',
  flexcolumn: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  button:
    'lg:bg-[#090b0e] lg:border-none lg:rounded-[4px] lg:pt-[15px] lg:pr-[25px] lg:pb-[15px] lg:pl-[25px] lg:flex lg:items-center lg:justify-center',
  input: 'lg:bg-[#ffffffff] lg:p-[10px] lg:w-[100%]',
  fontbold: 'lg:font-[bold]',
  divider: 'lg:w-[45%] lg:h-[fit-content]',
  spacebetween: 'lg:items-center lg:py-[20px] lg:px-[0px] lg:mb-[2px]',
  borderleft: 'lg:pl-[4px]',
  buttonoutline:
    'lg:p-[10px] lg:border-[2px] lg:border-solid lg:border-[rgb(102,194,255)] lg:bg-[transparent]',
  select:
    'lg:p-[11px] lg:bg-[white] lg:mb-[5px] lg:w-[100%] lg:border-[1px] lg:border-solid lg:border-[rgb(220, 220, 220)]',
  abovecontainer: 'lg:p-[30px] lg:bg-[#fbfbfbff] lg:w-[100%]',
  fontfamily: 'lg:font-opensans',
  css: 'lg:bg-[black]',
  belowcontainer: 'lg:w-[100%] lg:gap-y-[30px] lg:p-[25px] lg:bg-[#ffffffff]',
  iconcontainer:
    'lg:h-[36px] lg:w-[36px] lg:rounded-[50%] lg:border-none lg:justify-center',
  listitem: 'lg:flex lg:w-[100%] lg:items-center lg:gap-[10px] lg:no-underline',
  parent:
    'lg:flex lg:flex-col lg:bg-[#ef4444] lg:gap-y-[24px] lg:p-[20px] lg:w-[100%] lg:leading-[normal]',
  text: 'lg:text-[#525a66ff] lg:text-[15px]',
  liststyle: 'lg:flex lg:flex-col lg:gap-y-[8px] lg:p-[0px] lg:text-[12px]',
  listitem:
    'lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-[10px]',
  link2: 'lg:flex lg:flex-col lg:gap-[5px] lg:no-underline',
  text: 'lg:whitespace-no-wrap lg:overflow-hidden',
  link3:
    'lg:flex lg:text-[14px] lg:w-[fit-content] lg:items-center lg:gap-[7px] lg:no-underline lg:cursor-pointer',
  alignstart: 'lg:items-start',
  fontsizes: 'lg:text-[12px]',
  fontsizeb: 'lg:text-[14px]',
  card2:
    'lg:bg-[#ffffffff] lg:flex lg:py-[16px] lg:px-[24px] lg:items-center lg:gap-[20px] lg:w-[100%] lg:rounded-[0px]',
  chip1:
    'lg:bg-[#eff5f5ff] lg:border-[1px] lg:border-solid lg:border-[rgb(1, 42, 56)] lg:items-center lg:text-[#012a38ff] lg:py-[0px] lg:px-[6px] lg:whitespace-no-wrap lg:w-[fit-content] lg:text-[10px] lg:font-rubik lg:rounded-[4px]',
  widthContentFit: 'lg:w-[fit-content]',
  card: 'lg:flex lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:gap-y-[20px] lg:flex-col lg:p-[16px] lg:bg-[#ef4444]',
  panel: 'lg:gap-y-[10px] lg:flex lg:flex-col',
  btnstyle:
    'lg:bg-[#0284c7] lg:text-[None] lg:border-[1px] lg:border-solid lg:py-[12px] lg:px-[15px] lg:w-[100%] lg:font-[600] lg:text-[15px] lg:font-sans lg:flex lg:items-center lg:justify-center',
  resetbtn:
    'lg:bg-[#ced2d9ff] lg:border-[1px] lg:border-solid lg:border-[rgb(206, 210, 217)] lg:text-[#ffffffff] lg:cursor-pointer lg:flex lg:items-center lg:justify-center lg:py-[11px] lg:px-[16px] lg:w-[100%] lg:rounded-[4px]',
  bottomlink:
    'lg:text-[#090b0e] lg:font-[bold] lg:font-rubik lg:text-[14px] lg:whitespace-no-wrap lg:no-underline',
  tablehadercell: 'lg:w-[11%] lg:min-w-[60px] lg:table-cell lg:p-[10px]',
  css: 'lg:w-[50px] lg:h-[50px]',
  button:
    'lg:border-[1px] lg:border-solid lg:text-[None] lg:inline-block lg:my-[25px] lg:mx-[0] lg:text-[16px] lg:font-[500] lg:py-[15px] lg:px-[35px] lg:no-underline lg:bg-[None]',
  defaultinput:
    'lg:bg-[None] lg:text-[16px] lg:font-roboto lg:py-[12px] lg:px-[15px] lg:w-[100%] lg:rounded-[12px] lg:border-[1px] lg:border-solid',
  card: 'lg:bg-[#F1F1F1] lg:p-[20px] lg:gap-y-[10px] lg:items-start lg:border-[1px]',
  secondinput:
    'lg:border-[1px] lg:border-solid lg:border-[rgb(220, 220, 220)] lg:bg-[#ffffffff] lg:w-[100%]',
  displaycolumn: 'lg:flex lg:flex-col',
  parent:
    'lg:w-[100%] lg:bg-[#090b0e] lg:p-[20px] lg:gap-[10px] lg:flex lg:flex-col lg:font-sans',
  font: 'lg:text-[14px] lg:font-[600] lg:font-sans',
  parentcontainer:
    'lg:flex lg:flex-col lg:bg-[None] lg:w-[100%] lg:p-[10px] lg:text-[#ffffffff]',
  inputdesign:
    'lg:self-start lg:w-[100%] lg:border-[1px] lg:border-solid lg:border-[#7dd3fc] lg:bg-[transparent] lg:p-[13px] lg:text-[#ffffffff]',
  Authform:
    'lg:max-w-[600px] lg:w-[100%] lg:flex lg:flex-col lg:gap-y-[20px] lg:p-[20px] lg:bg-[#ffffffff]',
  fontstyle3:
    'lg:text-[#4d4d4dff] lg:text-[20px] lg:leading-[normal] lg:font-[600] lg:font-sans',
  fontStyle1:
    'lg:leading-[normal] lg:text-[15px] lg:text-[None] lg:font-roboto lg:font-[600]',
  selectedbtn:
    'lg:bg-[None] lg:text-[None] lg:flex lg:text-[14px] lg:font-[600px] lg:whitespace-no-wrap lg:rounded-[8px] lg:items-center lg:justify-center',
  flexrow: 'lg:w-[100%] lg:flex lg:justify-center lg:items-center',
  TextLink:
    'lg:w-[100%] lg:no-underline lg:items-center lg:text-[#525a66ff] lg:py-[6px] lg:px-[0px]',
  coldirection: 'lg:flex lg:flex-col',
  defaultbtn:
    'lg:py-[7px] lg:px-[12px] lg:bg-[None] lg:rounded-[8px] lg:leading-[normal] lg:text-[14px] lg:font-[600]',
  cardhead: 'lg:text-[14px] lg:font-[500]',
  font500: 'lg:font-[500]',
  gray: 'lg:text-[gray]',
  bordernone: 'lg:border-none',
  border: 'lg:border-[1px] lg:border-solid',
  dropdownmenuitem:
    'lg:text-[13px] lg:font-[500] lg:pt-[9px] lg:pr-[5px] lg:pb-[9px] lg:pl-[10px] lg:no-underline',
  avatar:
    'lg:min-h-[30px] lg:min-w-[30px] lg:h-[30px] lg:w-[30px] lg:bg-[None] lg:text-[white] lg:items-center lg:justify-center',
  tabletypohead: 'lg:text-[14px] lg:font-[550] lg:text-[gray]',
  circle: 'lg:w-[32px] lg:h-[32px]',
  iconbox:
    'lg:w-[64px] lg:h-[64px] lg:flex lg:items-center lg:justify-center lg:bg-[#f5f6fa]',
  sidebarlink:
    'lg:flex lg:flex-row lg:items-center lg:bg-[transparent] lg:no-underline lg:gap-[10px]',
  footer:
    'lg:flex lg:bg-[#ced2d9ff] lg:flex-col lg:max-w-[1000px] lg:w-[100%] lg:gap-y-[6px] lg:py-[6px] lg:px-[24px]',
  cardcontainer:
    'lg:border-[1px] lg:border-solid lg:border-[rgb(30, 36, 44)] lg:flex lg:flex-col lg:gap-y-[30px] lg:py-[24px] lg:px-[0] lg:w-[100%] lg:rounded-[8px]',
  typography:
    'lg:flex lg:flex-col lg:gap-y-[30px] lg:py-[5px] lg:px-[20px] lg:w-[100%] lg:rounded-[8px] lg:text-[22px] lg:text-[#ffffffff]',
  labeltypography: 'lg:self-start lg:text-[None] lg:font-[500] lg:text-[15px]',
  Container: 'lg:flex lg:flex-col lg:w-[100%]',
  label:
    'lg:self-start lg:text-[#0284c7] lg:font-[600] lg:text-[19px] lg:tracking-[0.6px]',
  radio: 'lg:flex lg:w-[30px] lg:h-[19px] lg:mt-[3px]',
  signupselect:
    'lg:w-[97.5%] lg:bg-[#090b0e] lg:text-[#979da7] lg:p-[10px] lg:self-start lg:border-none',
  iconbg1: 'lg:bg-[#e7f9f8]',
  iconbg2: 'lg:bg-[#ebf5fc]',
  iconbg3: 'lg:bg-[#fff7ed]',
  iconbg4: 'lg:bg-[#eef8f3]',
  fs13: 'lg:text-[13px]',
  screen: 'lg:bg-[#525a66ff] lg:text-[#ced2d9ff]',
  background: 'lg:flex lg:flex-col lg:gap-y-[20px]',
  icontext: 'lg:items-center',
  listlinkstyle:
    'lg:flex lg:items-center lg:w-[100%] lg:gap-x-[10px] lg:no-underline lg:text-[#ced2d9ff]',
  standardfont: 'lg:text-[14px] lg:text-[#525a66ff] lg:font-[500]',
  justifycenter: 'lg:flex lg:justify-center',
  fullborder: 'lg:border-[1px] lg:border-solid lg:border-[#090b0e]',
  microbg: 'lg:bg-[#ffffffff] lg:text-[#525a66ff] lg:text-[14px]',
  card: 'lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:w-[100%] lg:py-[24px] lg:px-[8px] lg:rounded-[4px] lg:items-center lg:justify-center lg:flex',
  img: 'lg:h-[100%] lg:w-[100%] lg:object-contain',
  fontStyle2: 'lg:font-sans lg:leading-[normal] lg:text-[16px] lg:text-[None]',
  InputStyle:
    'lg:bg-[None] lg:border-[2px] lg:border-solid lg:py-[13px] lg:px-[12px] lg:w-[100%]',
  outlinecard:
    'lg:bg-[#090b0e] lg:w-[100%] lg:p-[1rem] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)]',
  placecenter: 'lg:flex lg:justify-center lg:items-center',
  maincard: 'lg:bg-[#ffffffff] lg:w-[100%]',
  rowbtw: 'lg:justify-between lg:items-center',
  gridcards: 'lg:grid lg:grid-cols-2 lg:gap-[20px]',
  lightgrey: 'lg:text-[None]',
  textheaderrowcontainer: 'lg:justify-between lg:items-center lg:mb-[20px]',
  thickgrey: 'lg:text-[#ced2d9ff]',
  input: 'lg:text-[#333333ff] lg:p-[18px] lg:w-[100%] lg:rounded-[30px]',
  boxspace: 'lg:flex lg:justify-between lg:items-center',
  fontStyle1:
    'lg:leading-[normal] lg:text-[#525a66ff] lg:text-[15px] lg:font-[600px] lg:font-roboto',
  fontStyle3:
    'lg:leading-[normal] lg:text-[15px] lg:font-[600px] lg:font-roboto lg:text-[None]',
  columncontainer: 'lg:items-start',
  childoutlinedcards:
    'lg:bg-[#11171aff] lg:flex lg:items-center lg:w-[100%] lg:py-[8px] lg:px-[10px] lg:rounded-[6px] lg:border-[1px] lg:border-solid lg:border-[#ccc]',
  list1:
    'lg:flex lg:flex-col lg:pl-[10px] lg:gap-[5px] lg:list-none lg:text-[#090b0e]',
  childfilledcard:
    'lg:bg-[#05264cff] lg:flex lg:justify-start lg:items-center lg:pt-[16px] lg:pr-[0px] lg:pb-[16px] lg:pl-[12px] lg:w-[90%] lg:mt-[20px] lg:rounded-[8px] lg:gap-[10px]',
  rowspacebetween: 'lg:items-center lg:justify-between',
  modal:
    'lg:bg-[#0284c7] lg:w-[100%] lg:max-w-[600px] lg:rounded-[6px] lg:flex lg:flex-col lg:gap-y-[10px]',
  list: 'lg:w-[100%] lg:flex lg:flex-col lg:items-center lg:gap-[10px] lg:p-[10px]',
  card: 'lg:flex lg:gap-[10px] lg:w-[100%] lg:p-[10px] lg:border-[1px] lg:border-solid lg:border-[#fbbf24]',
  colflex: 'lg:flex lg:flex-col',
  cardwithborder:
    'lg:flex lg:flex-col lg:items-center lg:border-[1px] lg:border-solid lg:w-[100%] lg:gap-x-[15px] lg:p-[10px]',
  myCard:
    'lg:flex lg:flex-col lg:gap-y-[10px] lg:w-[100%] lg:p-[10px] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)]',
  childcards: 'lg:bg-[#ced2d9ff] lg:py-[15px] lg:px-[20px] lg:w-[100%]',
  parent: 'lg:bg-[#fbbf24] lg:w-[100%] lg:p-[20px]',
  text: 'lg:text-[12px] lg:font-[600] lg:text-[#525a66ff]',
  bordertype: 'lg:border-[1px] lg:border-solid lg:border-[rgb(206,210,217)]',
  settingsiconcontainer:
    'lg:py-[25px] lg:px-[5px] lg:bg-[#c0c4cc] lg:rounded-[8px 0px 0px 8px]',
  settingsfiltertypebox:
    'lg:w-[100%] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:py-[20px] lg:px-[10px] lg:justify-between lg:items-center',
  typoimagecontainer:
    'lg:justify-between lg:items-center lg:w-[100%] lg:py-[0px] lg:px-[20px]',
  avatar: 'lg:h-[30px] lg:w-[30px] lg:bg-[#fbbf24] lg:text-[#090b0e]',
  settingslist:
    'lg:w-[100%] lg:text-[None] lg:text-[14px] lg:flex lg:flex-col lg:gap-y-[5px]',
  settingbutton:
    'lg:self-start lg:bg-[#0284c7] lg:items-center lg:text-[14px] lg:text-[#ced2d9ff] lg:font-[bold]',
  mainparent:
    'lg:bg-[#ffffffff] lg:flex lg:flex-col lg:w-[100%] lg:gap-y-[30px] lg:p-[20px]',
  createquestionlistitem:
    'lg:p-[22px] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:flex lg:items-center lg:gap-x-[15px]',
  parent:
    'lg:w-[100%] lg:bg-[#ffffffff] lg:text-[#ced2d9ff] lg:flex lg:flex-col lg:gap-y-[1rem] lg:p-[2rem]',
  flexcolumn:
    'lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[100%]',
  inputstack:
    'lg:border-[1px] lg:border-solid lg:border-[rgb(220, 220, 220)] lg:bg-[white] lg:w-[56%] lg:items-center lg:justify-around lg:p-[5px]',
  border: 'lg:border-none',
  outlinebutton:
    'lg:bg-[transparent] lg:text-[None] lg:font-[600] lg:items-center lg:border-[1px] lg:border-solid lg:w-[fit-content]',
  tab: 'lg:w-[100%] lg:flex lg:justify-center lg:text-[None] lg:gap-y-[20px]',
  card: 'lg:w-[100%] lg:p-[15px] lg:flex lg:flex-col lg:gap-[10px] lg:border-[1px] lg:border-solid lg:border-[#7dd3fc]',
  cardcontainer:
    'lg:bg-[#fdfdfdff] lg:border-none lg:rounded-[10px] lg:w-[48%] lg:justify-center lg:items-start lg:p-[20px]',
  card: 'lg:flex lg:flex-col lg:border-none lg:items-start lg:gap-[15px] lg:w-[100%] lg:p-[5px]',
  imagebox:
    'lg:bg-[None] lg:border-[1px] lg:border-solid lg:p-[20px] lg:w-[100%] lg:flex lg:items-center lg:justify-center',
  spacebetween: 'lg:flex lg:justify-between lg:items-center',
  borderbottom: '',
  flexstart:
    'lg:flex lg:justify-start lg:items-start lg:w-[100%] lg:gap-x-[10px]',
  filledbox: 'lg:h-[20px] lg:w-[20px] lg:rounded-[50%]',
  childwidth: 'lg:w-[100%]',
  backgroundgrayinput: 'lg:bg-[#ebebebff] lg:font-[600] lg:text-[14px]',
  boxbordertop: 'lg:pb-[8px] lg:pt-[8px]',
  rowcontainer:
    'lg:justify-between lg:w-[100%] lg:p-[5px] lg:items-center lg:bg-[None]',
  tableheadcell: 'lg:text-[14px] lg:font-[bold] lg:text-[#7dd3fc] lg:p-[10px]',
  startcardrowcontainer:
    'lg:w-[100%] lg:justify-between lg:text-[None] lg:text-[14px]',
  boxborderbottom: 'lg:pb-[8px] lg:pt-[8px]',
  list: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  listitem: 'lg:flex lg:flex-row lg:gap-x-[10px]',
  buttoncenter: 'lg:flex lg:items-center lg:justify-center',
  maincontainer:
    'lg:w-[100%] lg:flex lg:flex-col lg:gap-[25px] lg:py-[15px] lg:px-[10px] lg:bg-[#090b0e]',
  modal:
    'lg:bg-[#ced2d9ff] lg:text-[None] lg:p-[24px] lg:max-w-[600px] lg:w-[100%] lg:rounded-[8px]',
  listItem:
    'lg:py-[5px] lg:px-[0px] lg:m-[0] lg:w-[100%] lg:flex lg:items-start lg:gap-x-[10px]',
  tabs1cardbottomsection:
    'lg:w-[50%] lg:p-[10px] lg:text-[13px] lg:text-[#3a3a3aff] lg:justify-center',
  tabs1dropdown:
    'lg:bg-[#090b0e] lg:border-[1px] lg:border-solid lg:border-[rgba(0,0,0,.12)] lg:top-[46px] lg:w-[250px]',
  createprojectinput: 'lg:border-none lg:rounded-[0px] lg:w-[100%]',
  pricingplanmaincard:
    'lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:w-[100%] lg:max-w-[340px] lg:h-[100%] lg:relative',
  pricingplancardheader: 'lg:p-[40px] lg:rounded-[5px 5px 0px 0px]',
  pricingplancardbody:
    'lg:py-[25px] lg:px-[55px] lg:bg-[#090b0e] lg:text-[#0284c7] lg:font-[500] lg:justify-between lg:rounded-[0px 0px 5px 5px]',
  accordionbody1:
    'lg:py-[20px] lg:px-[30px] lg:pl-[34px] lg:block lg:font-[normal]',
  myprofileinput:
    'lg:w-[100%] lg:bg-[#fbfbfb] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)]',
  gridcardstyling: 'lg:py-[22px] lg:px-[30px] lg:items-center lg:bg-[#090b0e]',
  biscutwhitebackground:
    'lg:bg-[#f7f8f9ff] lg:font-sans lg:text-[20px] lg:rounded-[10px]',
  row: 'lg:justify-start lg:items-center',
  link: 'lg:font-[700] lg:text-[#0284c7] lg:no-underline',
  uploadbutton:
    'lg:bg-[None] lg:text-[#ced2d9ff] lg:border-[1px] lg:p-[10px] lg:flex lg:items-center lg:justify-center',
  forminput: 'lg:text-left',
  placecenter: 'lg:flex lg:justify-center lg:items-center',
  li: 'lg:flex lg:text-[#0284c7] lg:p-[10px] lg:w-[90%] lg:gap-x-[10px]',
  cardcolumn: 'lg:flex lg:flex-col lg:gap-y-[10px]',
  colflex: 'lg:flex lg:flex-col',
  projectsettingcard:
    'lg:flex lg:flex-col lg:items-center lg:bg-[#090b0e] lg:justify-center lg:p-[20px] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:gap-y-[15px] lg:min-h-[190px]',
  tabsgridstyles: 'lg:w-[100%] lg:grid lg:gap-[18px] lg:grid-cols-3',
  dropdownmenu:
    'lg:text-[20px] lg:no-underline lg:text-[#ced2d9ff] lg:w-[100%]',
  accountsettinglinkbox:
    'lg:items-center lg:py-[0px] lg:px-[30px] lg:text-[20px] lg:font-[600] lg:no-underline lg:flex lg:gap-x-[15px] lg:text-[black]',
  BoxContainer: 'lg:flex lg:flex-col lg:p-[1rem] lg:gap-[15px]',
  alertPrimary: 'lg:bg-[#0284c7] lg:text-[#7dd3fc] lg:text-[12px] lg:p-[5px]',
  sidebarlink:
    'lg:flex lg:gap-[10px] lg:p-[5px] lg:no-underline lg:text-[#090b0e]',
  massasignmodal:
    'lg:py-[25px] lg:px-[15px] lg:flex lg:flex-col lg:gap-y-[25px] lg:text-[None] lg:text-[14px]',
  link: 'lg:flex lg:items-center lg:gap-[7px] lg:no-underline lg:text-[#ced2d9ff]',
  parent:
    'lg:flex lg:flex-col lg:gap-y-[15px] lg:w-[100%] lg:p-[16px] lg:bg-[#ffffffff]',
  box: 'lg:bg-[#ffffffff] lg:cursor-pointer lg:text-center lg:flex lg:flex-col lg:gap-[10px] lg:h-[100%] lg:w-[100%]',
  rowContainerBroderTop:
    'lg:w-[100%] lg:pt-[10px] lg:pr-[0px] lg:pb-[10px] lg:pl-[20px]',
  text: 'lg:text-[15px] lg:leading-[normal] lg:text-[#525a66ff]',
  divider: 'lg:bg-[None] lg:w-[45%] lg:h-[1px]',
  card2:
    'lg: lg:border-[1px] lg:border-solid lg:border-[#ef4444] lg:flex lg:justify-between lg:items-center lg:py-[20px] lg:px-[20px] lg:ml-[15px] lg:w-[98%] lg:gap-x-[15px]',
  button:
    'lg:border-[1px] lg:border-solid lg:border-[rgb(30, 161, 242)] lg:text-[#ffffffff] lg:cursor-pointer lg:font-[600] lg:py-[12px] lg:px-[16px] lg:gap-[8px] lg:rounded-[6px] lg:items-center lg:justify-center',
  input:
    'lg:border-[1px] lg:border-solid lg:border-[rgb(226, 232, 240)] lg:py-[10px] lg:px-[16px] lg:w-[100%] lg:rounded-[6px]',
  linkbox:
    'lg:flex lg:gap-x-[5px] lg:text-[#525a66ff] lg:text-[15px] lg:items-center lg:no-underline',
  modalbody:
    'lg: lg:flex lg:flex-col lg:justify-between lg:w-[100%] lg:p-[15px] lg:max-w-[1100px]',
  coldirec: 'lg:flex lg:flex-col',
  link3:
    'lg:flex lg:flex-col lg:items-center lg:text-center lg:h-[100%] lg:w-[100%] lg:py-[28px] lg:px-[8px] lg:gap-y-[12px] lg:no-underline',
  link2:
    'lg:bg-[transparent] lg:border-none lg:cursor-pointer lg:flex lg:font-[600] lg:no-underline lg:p-[10px] lg:text-[#ced2d9ff] lg:items-center lg:gap-[10px] lg:rounded-[8px]',
  list: 'lg:flex lg:flex-col lg:items-start lg:gap-y-[12px]',
  link: 'lg:cursor-pointer lg:text-[15px] lg:text-[#ffffffff] lg:no-underline',
  modalpopup: 'lg:max-w-[600px] lg:w-[100%] lg:bg-[None]',
  link4:
    'lg:text-[#2d3748ff] lg:gap-x-[6px] lg:flex lg:flex-row lg:items-center lg:no-underline lg:w-[fit-content]',
  card: 'lg:cursor-pointer lg:rounded-[10px] lg:w-[100%] lg:h-[100%]',
  parent:
    'lg:flex lg:items-center lg:justify-between lg:py-[16px] lg:px-[14px]',
  cardlistmaincontainer:
    'lg:bg-[#090b0e] lg:py-[25px] lg:px-[18px] lg:flex lg:items-center lg:gap-x-[20px] lg:w-[100%]',
  linkbox:
    'lg:w-[100%] lg:flex lg:items-center lg:gap-[10px] lg:no-underline lg:text-[#ced2d9ff] lg:p-[5px]',
  accordianheader: 'lg:flex lg:w-[100%] lg:py-[0px] lg:px-[1.5rem]',
  accordianbody: 'lg:flex lg:w-[100%] lg:py-[10px] lg:px-[24px]',
  parentcard:
    'lg:bg-[None] lg:flex lg:gap-x-[12px] lg:w-[100%] lg:py-[8px] lg:px-[10px] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)]',
  signinbutton:
    'lg:justify-center lg:items-center lg:p-[13px] lg:border-[1px] lg:border-solid lg:border-[#0284c7] lg:w-[100%]',
  customoptionaddnewissue:
    'lg:w-[100%] lg:flex lg:gap-x-[15px] lg:py-[5px] lg:px-[10px] lg:items-center',
  simpletext: 'lg:text-[15px] lg:text-[#ffffffff] lg:leading-[normal]',
  outlinebutton:
    'lg:bg-[transparent] lg:items-center lg:justify-center lg:gap-[5px] lg:min-w-[100px] lg:py-[5px] lg:px-[5px] lg:border-[1px] lg:border-solid lg:border-[#8fbec8] lg:text-[10px]',
  linkcontainer:
    'lg:w-[100%] lg:flex lg:items-center lg:justify-between lg:p-[10px] lg:no-underline lg:text-[#ced2d9ff]',
  switchlabel2: 'lg:w-[100%] lg:p-[15px] lg:items-center',
  celltypo: 'lg:text-[#ffffffff] lg:flex-no-wrap lg:text-[14px]',
  RoundedButton:
    'lg:w-[40px] lg:h-[40px] lg:rounded-[50%] lg:items-center lg:justify-center',
  fontStyle1:
    'lg:font-sans lg:font-[600] lg:text-[#ffffffff] lg:text-[15px] lg:leading-[normal]',
  FontStyle2:
    'lg:font-roboto lg:font-[600] lg:text-[#525a66ff] lg:text-[15px] lg:leading-[normal]',
  primarybutton: 'lg:bg-[#4ade80] lg:text-[#ffffffff]',
  flexcenter: 'lg:flex lg:items-center lg:justify-center',
  outlinebuttonsecondary:
    'lg:bg-[transparent] lg:border-[2px] lg:border-solid lg:border-[#4ade80] lg:text-[#4ade80] lg:font-[500]',
  borderstylethick: 'lg:border-[2px] lg:border-solid lg:border-[#0284c7]',
  avatar: 'lg:h-[30px] lg:w-[30px]',
  outlinebutton:
    'lg:bg-[transparent] lg:border-[2px] lg:border-solid lg:border-[rgb(163,163,163)] lg:w-[fit-content] lg:text-[#ced2d9ff]',
  btnstyle:
    'lg:bg-[#090b0e] lg:text-[#525a66ff] lg:text-[14px] lg:font-roboto lg:font-[600px] lg:border-[1px] lg:border-solid lg:border-[rgb(255, 255, 255)] lg:flex lg:justify-center lg:items-center',
  avatar: 'lg:w-[60px] lg:relative lg:h-[60px] lg:text-[25px]',
  fontstyle1:
    'lg:leading-[normal] lg:text-[#090b0e] lg:font-roboto lg:text-[15px] lg:font-[600]',
};

export default commonUtilities;
