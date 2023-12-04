# Tabnapping
Tabnabbing is a type of phishing attack that targets the inactive tabs in your browser. While you're focused on your current tab, the link to the previous one can be hijacked, and you'll be redirected from the intended site to a malicious one resembling the real thing.

Since the malicious site looks very similar to the original, the user is typically unaware that the page they're on isn't legit once they return to that tab. Because of this, the user puts in their personal information, not knowing someone's on the other side waiting to steal it.

# eslint-plugin-plugin

The plugin enforces developer to add rel="noopener noreferrer" to prevent tabnapping malicious attack.

## Installation

To Install the plugin locally first clone the project then run the below command

```
npm link
```

Next, run install `eslint-plugin-plugin` in project where you want to use the plugin


## Usage

Add `plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "plugin/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


