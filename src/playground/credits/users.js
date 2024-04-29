const shuffle = list => {
    for (let i = list.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const tmp = list[i];
        list[i] = list[random];
        list[random] = tmp;
    }
    return list;
};

/* Modified version of credits generating, now compatible with github :) */
const fromHardcoded = ({userID, username, userBase}) => {
    const result = {
        text: username
    };
    if (!userBase) {
        // Maybe try to have a default image?
    }
    if (username && userBase === 'scratch') {
        result.href = `https://scratch.mit.edu/users/${username}/`;
        result.image = `https://trampoline.turbowarp.org/avatars/${userID}`;
    } else if (username && userBase === 'github') { // For users on github, they don't need to submit a userID.
        if (userID) {
            result.href = `https://github.com/${userID}/`;
            result.image = `https://avatars.githubusercontent.com/${userID}`;
        } else {
            result.href = `https://github.com/${username}/`;
            result.image = `https://avatars.githubusercontent.com/${username}`;
        }
    }
    return result;
};

// The lists below are in no particular order.

const gekowarp = [
    {
        userBase: 'github',
        username: 'DilemmaGX'
    }
].map(fromHardcoded);

const contributors = [
    {
        userID: '41219524',
        userBase: 'scratch',
        username: 'CubesterYT'
    },
    {
        userID: '64691048',
        userBase: 'scratch',
        username: 'CST1229'
    },
    {
        userBase: 'github',
        username: 'FurryR'
    },
    {
        userID: '17340565',
        userBase: 'scratch',
        username: 'GarboMuffin'
    },
    {
        userID: '12498592',
        userBase: 'scratch',
        username: 'LilyMakesThings'
    },
    {
        userID: '105362329',
        userBase: 'scratch',
        username: 'TrueFantom'
    },
    {
        userID: '9636514',
        userBase: 'scratch',
        username: 'Tacodiva7729'
    },
    {
        userBase: 'github',
        username: 'SimonShiki'
    },
    {
        userID: '34824813',
        userBase: 'scratch',
        username: 'Geotale'
    },
    {
        userBase: 'github',
        username: 'Wowfunhappy'
    }
].map(fromHardcoded);

const addonDevelopers = [
    {
        userID: '34018398',
        userBase: 'scratch',
        username: 'Jeffalo'
    },
    {
        userID: '64184234',
        userBase: 'scratch',
        username: 'ErrorGamer2000'
    },
    {
        userID: '41616512',
        userBase: 'scratch',
        username: 'pufferfish101007'
    },
    {
        userID: '61409215',
        userBase: 'scratch',
        username: 'TheColaber'
    },
    {
        userID: '1882674',
        userBase: 'scratch',
        username: 'griffpatch'
    },
    {
        userID: '10817178',
        userBase: 'scratch',
        username: 'apple502j'
    },
    {
        userID: '16947341',
        userBase: 'scratch',
        username: '--Explosion--'
    },
    {
        userID: '14880401',
        userBase: 'scratch',
        username: 'Sheep_maker'
    },
    {
        userID: '9981676',
        userBase: 'scratch',
        username: 'NitroCipher'
    },
    {
        userID: '2561680',
        userBase: 'scratch',
        username: 'lisa_wolfgang'
    },
    {
        userID: '60000111',
        userBase: 'scratch',
        username: 'GDUcrash'
    },
    {
        userID: '4648559',
        userBase: 'scratch',
        username: 'World_Languages'
    },
    {
        userID: '17340565',
        userBase: 'scratch',
        username: 'GarboMuffin'
    },
    {
        userID: '5354974',
        userBase: 'scratch',
        username: 'Chrome_Cat'
    },
    {
        userID: '34455896',
        userBase: 'scratch',
        username: 'summerscar'
    },
    {
        userID: '55742784',
        userBase: 'scratch',
        username: 'RedGuy7'
    },
    {
        userID: '9636514',
        userBase: 'scratch',
        username: 'Tacodiva7729'
    },
    {
        userID: '14792872',
        userBase: 'scratch',
        username: '_nix'
    },
    {
        userID: '30323614',
        userBase: 'scratch',
        username: 'BarelySmooth'
    },
    {
        userID: '64691048',
        userBase: 'scratch',
        username: 'CST1229'
    },
    {
        userBase: 'github',
        username: 'DNin01'
    },
    {
        userID: '16426047',
        userBase: 'scratch',
        username: 'Maximouse'
    },
    {
        userBase: 'github',
        username: 'retronbv'
    },
    {
        userBase: 'github',
        username: 'GrahamSH'
    },
    {
        userID: '22529928',
        userBase: 'scratch',
        username: 'simiagain'
    },
    {
        userBase: 'github',
        username: 'Secret-chest'
    },
    {
        userID: '11677378',
        userBase: 'scratch',
        username: 'Mr_MPH'
    },
    {
        userBase: 'github',
        username: 'TheKodeToad'
    }
].map(fromHardcoded);

// generated by TurboWarp/extensions/scripts/get-credits-for-gui.js
const extensionDevelopers = [
    {
        userID: 'sipc',
        userBase: 'github',
        username: '-SIPC-'
    },
    {
        userBase: 'github',
        username: '0832'
    },
    {
        userID: '17235330',
        userBase: 'scratch',
        username: 'aleb2005'
    },
    {
        userBase: 'github',
        username: 'BlueDome77'
    },
    {
        userBase: 'github',
        username: 'ClaytonTDM'
    },
    {
        userID: '37070511',
        userBase: 'scratch',
        username: 'cs2627883'
    },
    {
        userID: '64691048',
        userBase: 'scratch',
        username: 'CST1229'
    },
    {
        userID: '41219524',
        userBase: 'scratch',
        username: 'CubesterYT'
    },
    {
        userID: '33988895',
        userBase: 'scratch',
        username: 'D-ScratchNinja'
    },
    {
        userBase: 'github',
        username: 'DT'
    },
    {
        userID: '1882674',
        userBase: 'scratch',
        username: 'griffpatch'
    },
    {
        userID: '41876695',
        userBase: 'scratch',
        username: 'JeremyGamer13'
    },
    {
        userID: '12498592',
        userBase: 'scratch',
        username: 'LilyMakesThings'
    },
    {
        userBase: 'github',
        username: 'MikeDEV'
    },
    {
        userID: '62950341',
        userBase: 'scratch',
        username: 'NamelessCat'
    },
    {
        userBase: 'github',
        username: 'NOname-awa'
    },
    {
        userID: '26959223',
        userBase: 'scratch',
        username: 'pinksheep2917'
    },
    {
        userBase: 'github',
        username: 'pumpkinhasapatch'
    },
    {
        userBase: 'github',
        username: 'qxsck'
    },
    {
        userID: '29118689',
        userBase: 'scratch',
        username: 'RedMan13'
    },
    {
        userID: '80038021',
        userBase: 'scratch',
        username: 'RixTheTyrunt'
    },
    {
        userID: '45777723',
        userBase: 'scratch',
        username: 'DemonX5'
    },
    {
        userID: '14880401',
        userBase: 'scratch',
        username: 'Sheep_maker'
    },
    {
        userID: '103496265',
        userBase: 'scratch',
        username: 'shreder95ua'
    },
    {
        userBase: 'github',
        username: 'Skyhigh173'
    },
    {
        userID: '52066199',
        userBase: 'scratch',
        username: 'softed'
    },
    {
        userBase: 'github',
        username: 'TheShovel'
    },
    {
        userID: '105362329',
        userBase: 'scratch',
        username: 'TrueFantom'
    },
    {
        userID: '19133274',
        userBase: 'scratch',
        username: 'Vadik1'
    },
    {
        userBase: 'github',
        username: 'veggiecan0419'
    },
    {
        userID: '82486672',
        userBase: 'scratch',
        username: 'lolecksdeehaha'
    },
    {
        userID: '3318598',
        userBase: 'scratch',
        username: 'plant2014'
    },
    {
        userBase: 'github',
        username: 'ZXMushroom63'
    }
].map(fromHardcoded);

const docs = [
    {
        userID: '12498592',
        userBase: 'scratch',
        username: 'LilyMakesThings'
    },
    {
        userBase: 'github',
        username: 'DNin01'
    },
    {
        userBase: 'github',
        username: 'Samq64'
    },
    {
        username: '61080GBA'
    },
    {
        userBase: 'github',
        username: 'adazem009'
    },
    {
        userBase: 'github',
        username: 'sajtosteszta32'
    },
    {
        userBase: 'github',
        username: 'yoyomonem'
    },
    {
        userID: '55742784',
        userBase: 'scratch',
        username: 'RedGuy7'
    },
    {
        userBase: 'github',
        username: '28klotlucas2'
    },
    {
        userBase: 'github',
        username: 'PPPDUD'
    },
    {
        userBase: 'github',
        username: 'BackThePortal'
    },
    {
        userBase: 'github',
        username: 'Naleksuh'
    }
].map(fromHardcoded);

export default {
    gekowarp: shuffle(gekowarp),
    contributors: shuffle(contributors),
    addonDevelopers: shuffle(addonDevelopers),
    extensionDevelopers: shuffle(extensionDevelopers),
    docs: shuffle(docs)
};
