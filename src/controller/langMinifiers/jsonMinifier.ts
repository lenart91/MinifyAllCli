/**
 * @file That is called when the user minifies a JSON document
 * This file receives the JSON document and returns the minified one.
 * @author Jose Gracia Berenguer
 * @since 0.2.0
 * @see README.md
 * @link https://github.com/Josee9988/MinifyAll repository.
 * @link https://github.com/Josee9988/MinifyAll/issues issues and enhancements.
 */

/**
 * Class that contain all the functions needed for minify json or jsonc.
 */
export class JsonMinifier {
    /**
     * Summary Minifier constructor that receives the content.
     *
     * Description this is the constructor of the class and it
     * will receive an array with the content and it will assign it
     * to a private variable that will be used later on.
     *
     * @param  jsonContent all the code that will be minified .
     */
    constructor(private jsonContent: string[]) {
    }

    /**
     * Summary getJSONMinified finds lasts spaces and trim it into just one line.
     *
     * Description the method will get the array with all the lines and will
     * make one String out of all of them; Then it will use REGEX
     * to replace multiple concurrencies, like removing multiple spaces,
     * unnecessary tabulations and specific things per each language.
     *
     * @return  the line minified.
     */
    public getJSONMinified(): string {
        return this.jsonContent.join('').replace(/;\}|\s+}/g, '}')
            .replace(/\/\*.*?\*\//g, '').replace(/:\s/g, ':')
            .replace(/\s{2}/g, '')
            .replace(/ {/g, '{')
            .replace(/[\t]/g, '')
            .replace(/,}/g, '}')
            .replace(/,]/g, ']')
            .replace(/\s\,/g, ',')// remove space before a comma ( ,) -> (,)
            .replace(/\,\s/g, ',')// remove space after a comma (, ) -> (,)
            .replace(/", /g, '",');
    }
}
