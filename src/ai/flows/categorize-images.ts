'use server';

/**
 * @fileOverview AI-powered image categorization and tagging for the homepage gallery.
 *
 * - categorizeImage - Categorizes and tags an image for the homepage gallery.
 * - CategorizeImageInput - The input type for the categorizeImage function.
 * - CategorizeImageOutput - The return type for the categorizeImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo to be categorized, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  filename: z.string().describe('The filename of the image.'),
});
export type CategorizeImageInput = z.infer<typeof CategorizeImageInputSchema>;

const CategorizeImageOutputSchema = z.object({
  category: z
    .string()
    .describe("The main category of the image (e.g., 'signs', 'vehicle wraps', 'large format graphics')."),
  tags: z.array(z.string()).describe('An array of tags associated with the image.'),
  description: z.string().describe('A concise description of the image content.'),
});
export type CategorizeImageOutput = z.infer<typeof CategorizeImageOutputSchema>;

export async function categorizeImage(input: CategorizeImageInput): Promise<CategorizeImageOutput> {
  return categorizeImageFlow(input);
}

const categorizeImagePrompt = ai.definePrompt({
  name: 'categorizeImagePrompt',
  input: {schema: CategorizeImageInputSchema},
  output: {schema: CategorizeImageOutputSchema},
  prompt: `You are an expert in visual content categorization for a sign and vehicle wrap company.

  Analyze the image and provide the following information:

  1.  Category: Determine the primary category the image belongs to (signs, vehicle wraps, or large format graphics).
  2.  Tags: Generate a list of relevant tags to describe the image in detail. Be specific and use relevant keywords.
  3.  Description: Write a concise description of the image content.

  Here is the image to analyze:

  Filename: {{{filename}}}
  Image: {{media url=photoDataUri}}
  `,
});

const categorizeImageFlow = ai.defineFlow(
  {
    name: 'categorizeImageFlow',
    inputSchema: CategorizeImageInputSchema,
    outputSchema: CategorizeImageOutputSchema,
  },
  async input => {
    const {output} = await categorizeImagePrompt(input);
    return output!;
  }
);
